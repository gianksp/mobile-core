using UnityEngine;
using System.Collections;

public class Manager : MonoBehaviour {

	public enum Scenes
	{
		Builder,
		Main
	}

	private static Manager instance;

	// Singleton getter
	public static Manager Instance
	{
		get { return instance; }
	}

	// Handle unique instance of this object
	private void Awake()
	{
		// If no Manager ever existed, we are it.
		if (instance == null)
			instance = this;
		// If one already exist, it's because it came from another level.
		else if (instance != this)
		{
			Destroy(gameObject);
			return;
		}
	}

	// Use this for initialization
	void Start () {
		DontDestroyOnLoad (gameObject);
	}
	
	// GUI, handle 2 levels, main and builder
	void OnGUI () {
		string scene = Application.loadedLevelName;
		string nextScene = (scene == Scenes.Main.ToString ()) ? Scenes.Builder.ToString () : Scenes.Main.ToString ();
		if (GUI.Button (new Rect (Screen.width - 210, 10, 200, 50),nextScene)) {
			if (scene == Scenes.Main.ToString()) {
				Application.LoadLevel(Scenes.Builder.ToString());
			} else {
				Application.LoadLevel(Scenes.Main.ToString());
			}
		}
	}
}
