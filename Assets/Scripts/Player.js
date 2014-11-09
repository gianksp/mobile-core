#pragma strict

var code : String = "rigidbody.AddForce(Vector3.forward*50);";

function Start () {
	rigidbody.isKinematic = true;
    rigidbody.detectCollisions = false;
}

function Update () {

	if (code != null && code != "Your code here") {
	
		eval(code);
	}

}

function OnGUI () {
	// Make a multiline text area that modifies stringToEdit.
	code = GUI.TextArea (Rect (10, 60, 250, 800), code == null ? "Your code here" : code, 1000);
	
	if (GUI.Button(Rect(Screen.width - 150, 10 , 100 ,30),"Click")) {
        
        rigidbody.isKinematic = false;
        rigidbody.detectCollisions = true;
	}

}