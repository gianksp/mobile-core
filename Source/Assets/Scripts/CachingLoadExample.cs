using System;
using UnityEngine;
using System.Collections;

public class CachingLoadExample : MonoBehaviour {
	public string BundleURL;
	public string AssetName;
	public int version;
	
	void Start() {
		//StartCoroutine (DownloadAndCache());
	}
	
	IEnumerator DownloadAndCache (){
		// Wait for the Caching system to be ready
		while (!Caching.ready)
			yield return null;

		Debug.Log ("Test");
		// Load the AssetBundle file from Cache if it exists with the same version or download and store it in the cache
		using(WWW www = WWW.LoadFromCacheOrDownload (BundleURL, version)){
			yield return www;
			if (www.error != null)
				throw new Exception("WWW download had an error:" + www.error);
			AssetBundle bundle = www.assetBundle;
			if (AssetName == "") {
				Instantiate(bundle.mainAsset);
				Debug.Log ("hue");
			}
			else {
				Instantiate(bundle.Load(AssetName));
				Debug.Log ("hue2"+AssetName);
			}
			// Unload the AssetBundles compressed contents to conserve memory
			bundle.Unload(false);
			
		} // memory is freed from the web stream (www.Dispose() gets called implicitly)
	}

	void OnGUI () {

		if (GUI.Button(new Rect(10, 10,100,20),"Load")) {
			StartCoroutine (DownloadAndCache());

		};
	}
}
