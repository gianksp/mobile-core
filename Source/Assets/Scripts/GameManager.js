#pragma strict

class GameManager extends MonoBehaviour {

var www : WWW;
var source;
	//Draw in screen
	private function OnGUI () { }
	
	//Initialise
	private function Awake () {
		LoadPlayerFile();
	}
	
	private function LoadPlayerFile() {
	
//	    www = new WWW ("file:///Users/giancarlosanchez/Desktop/Player.js");
//		// Wait for download to complete
//		yield www;
//		
//		source = www.text;
		
	}
	
	private function Start() { }
	
	//Frame by frame behavior handling
	private function LateUpdate () { }
	private function Update() {
	
		if (source != null) {
		Debug.Log(source);
			eval(source);
		}
	  }
	private function FixedUpdate() { }
	
	//Collision
	private function OnCollisionEnter () { }
	private function OnCollisionExit () { }
	private function OnCollisionStay () { }

	//Enable
	private function OnDisable () { }
	private function OnEnable () { }
	private function Reset () { }
	private function OnDestroy () { }
	private function OnValidate () { }
	private function OnWillRenderObject () { }	
}