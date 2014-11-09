#pragma strict

var code;

function Start () {
//	rigidbody.isKinematic = true;
//    rigidbody.detectCollisions = false;
}

function Update () {
	code = PlayerPrefs.GetString("code");
	if (code != null) {
		eval(code);
	}

}

function OnGUI () {
	code = PlayerPrefs.GetString("code");
	// Make a multiline text area that modifies stringToEdit.
	code = GUI.TextArea (Rect (10, 60, 250, 800), code, 1000);
	PlayerPrefs.SetString("code",code);
//	
//	if (GUI.Button(Rect(Screen.width - 150, 10 , 100 ,30),"Click")) {
//        
//        rigidbody.isKinematic = false;
//        rigidbody.detectCollisions = true;
//	}

}