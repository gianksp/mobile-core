using UnityEngine;
using System.Collections;

public class Manager : MonoBehaviour {

	public static bool gameOn;
	public Transform target;

	public GameObject obstacle;
	bool ready;
	bool scriptReady;

	// Use this for initialization
	void Start () {
		gameOn = true;
		ready = true;
	}
	
	// Update is called once per frame
	void Update () {
		transform.position = new Vector3 (target.position.x, 0, target.position.z);
	
		if (gameOn && ready) {
			StartCoroutine(DeployAsteroid(1F));
		} 

		if (!gameOn) {
			target.rigidbody.velocity = Vector3.zero;
		}
	}

	IEnumerator DeployAsteroid(float waitTime) {
		ready = false;
		GameObject obs =  (GameObject)Instantiate(obstacle, new Vector3 (Random.Range(target.transform.position.x-15f,target.transform.position.x+15), 
		                                   0, 
		                                   Random.Range(target.transform.position.z+500f,target.transform.position.z+1000)), Quaternion.identity);
		obs.transform.localScale = new Vector3(Random.Range(5f,20f),
		                                            Random.Range (5f,100f),
		                                            Random.Range (5f,30f));
		Destroy (obs, 30);
		yield return new WaitForSeconds(waitTime);
		ready = true;

	}

	public static void GameOver() {
		gameOn = false;
	}

	void OnGUI () {

		if (!gameOn)
		if (GUI.Button (new Rect (Screen.width/2-200, Screen.height/2-50, 400, 100), "Game Over!! Your score is "+target.position.z+"\nPress Here to start again!")) {
			Application.LoadLevel("Main");		
		}
	}

}
