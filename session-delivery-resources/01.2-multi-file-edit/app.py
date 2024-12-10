from flask import Flask, render_template

app = Flask(__name__)

@app.route('/hello')
def hello():
    return "Hello, World!"

@app.route('/')
def index():
    return render_template('party_form.html')

@app.route('/create_invitation', methods=['POST'])
def create_invitation():
    return "Party invitation created!"

@app.route('/view_invitation/<invitation_id>', methods=['GET'])
def view_invitation(invitation_id):
    return render_template('invitation.html', invitation_id=invitation_id)

@app.route('/rsvp/<invitation_id>', methods=['POST'])
def rsvp(invitation_id):
    return f"RSVP for invitation {invitation_id} received"

if __name__ == '__main__':
    app.run(debug=True)