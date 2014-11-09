using UnityEngine;
using System.Collections;

public class Obstacle : MonoBehaviour {

	void OnCollisionEnter(Collision collision) {

		if (collision.gameObject.tag == "Player") {
			Manager.GameOver();
		}
	}
}
