package helpers;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class EncryptHelper {
	public static byte[] encrypt(String frase){
		try {
			MessageDigest digester = MessageDigest.getInstance("SHA1");
			digester.update(frase.getBytes());
			return digester.digest();
		} catch (NoSuchAlgorithmException e) {
			return null;
		}
	}
}
