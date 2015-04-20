#pragma strict

class Player extends MobileCore {

	function FixedUpdate() {
	
		//Stay flying
		if (this.rigidbody.velocity.y < 0) {
			this.rigidbody.AddForce(Vector3.up*this.rigidbody.mass*Physics.gravity.y*(-1));
		}
		
		
		//this.rigidbody.AddForce(Vector3.forward*10);
		
		if (Input.GetKey ("up")) {
				this.rigidbody.AddRelativeTorque(Vector3.right*10);
		
		}

		
		if (Input.GetKey ("down")) {
				this.rigidbody.AddRelativeTorque(-Vector3.right*10);
		
		}
		
				if (Input.GetKey ("left")) {
				this.rigidbody.AddRelativeTorque(Vector3.forward*10);
		
		}
		
				if (Input.GetKey ("right")) {
				this.rigidbody.AddRelativeTorque(-Vector3.forward*10);
		
		}
		
				
		if (Input.GetKey ("w")) {
				this.rigidbody.AddRelativeForce(Vector3.forward*10);
				thruster.Play();
		}
		
				
		if (Input.GetKey ("s")) {
				this.rigidbody.AddRelativeForce(-Vector3.forward*10);
		
		}
		
		if (Input.GetKey ("a")) {
				this.rigidbody.AddRelativeForce(-Vector3.right*10);
		
		}
		
				if (Input.GetKey ("d")) {
				this.rigidbody.AddRelativeForce(Vector3.right*10);
		
		}
	}
}
