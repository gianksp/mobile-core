#pragma strict


class MobileCore extends MonoBehaviour {

	private var energy:float = 100;
	private var hp:float = 100;
	public var muzzles:Transform[];

	public var caliber:GameObject;

	private var shooting:boolean;
	public var laser : AudioSource;
	public var thruster: AudioSource;

	//Draw in screen
	private function OnGUI () {
	
		GUI.Label(Rect(Screen.width - 200, 10, 200,50),"HP: "+this.hp.ToString());
		GUI.Label(Rect(Screen.width - 200, 30, 200,50),"Energy: "+this.energy.ToString());
		GUI.Label(Rect(Screen.width - 200, 50, 200,50),"Velocity: "+this.rigidbody.velocity.ToString());
		GUI.Label(Rect(Screen.width - 200, 70, 200,50),"Angular Velocity: "+this.rigidbody.angularVelocity.ToString());

	}
	
	//Initialise
	private function Awake () { 
	
	}
	
	
	public function Start() { }
	
	//Frame by frame behavior handling
	public function LateUpdate () { 
	
			if (Input.GetKey ("space") && !shooting) {
				StartCoroutine("Shoot");
		
		}
	}
	
	
function Shoot () {
		shooting = true;
		// suspend execution for waitTime seconds
		yield WaitForSeconds (0.2f);
		for (var cannon : Transform in muzzles) {
			Debug.Log("Shooting");
			var bullet:GameObject = Instantiate (caliber, cannon.transform.position, transform.rotation);
			bullet.rigidbody.AddRelativeForce(Vector3.forward*1000);
			laser.Play();
			yield WaitForSeconds (0.1f);
		}
		shooting = false;
		
	}

	
	private function Update() { }
	public function FixedUpdate() { }
	
	//Collision
	private function OnCollisionEnter () { 
	
		Destroy(gameObject);
	}
	
	
	
	private function OnCollisionExit () { }
	private function OnCollisionStay () { }

	//Enable
	private function OnDisable () { }
	private function OnEnable () { }
	private function Reset () { }
	private function OnDestroy () { }
	private function OnValidate () { }
	private function OnWillRenderObject () { }
	
//	//Mouse movement
//	private function OnMouseDown () { }
//	private function OnMouseDrag () { }
//	private function OnMouseEnter () { }
//	private function OnMouseExit () { }
//	private function OnMouseOver () { }
//	private function OnMouseUp () { }
//	private function OnMouseUpAsButton () { }
//	
//	//Network
//	private function OnNetworkInstantiate () { }
//	private function OnParticleCollision () { }
//	private function OnPlayerConnected () { }
//	private function OnPlayerDisconnected () { }	
//	private function OnPostRender () { }
//	private function OnPreCull () { }
//	private function OnPreRender () { }
//	private function OnRenderImage () { }
//	private function OnRenderObject () { }
//	private function OnSerializeNetworkView () { }	
//	private function OnServerInitialized () { }
//
//	//Trigger
//	private function OnTriggerEnter () { }
//	private function OnTriggerEnter2D () { }
//	private function OnTriggerExit () { }
//	private function OnTriggerExit2D () { }
//	private function OnTriggerStay () { }
//	private function OnTriggerStay2D () { }	
}