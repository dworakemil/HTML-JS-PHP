Przyk³ad strony logowania do banku.
Ca³a baza danych, jest zaimplementowana w kodzie, nale¿y j¹ traktowaæ jako przyk³ad. Ta implementacja bazy danych nie jest bezpieczna.


Przy próbie zalogowania jesteœmy pytani o login, nastêpnie o has³o. Has³o jest szyfrowane funkcj¹ SHA256 i hash jest porównywany z hashem zapisanym w bazie danych.
Przy wpisywaniu has³a widzimy obrazek który w koñcowej wersji banku mo¿na by samemu ustawiæ. Doda³em trzy przyk³adowe obrazki, to jest pierœcieñ, kot i pies. Dziêki temu mamy pewnoœæ, ¿e logujemy siê na dobre konto i przede wszystkim na w³aœciwej stronie bankowej, a nie stronie która siê podszywa pod nasz bank.
Po wpisaniu odpowiedniego has³a, na adres email (przypisany do konta) jest wysy³any szeœciocyfrowy kod dostêpu. Dopiero po wprowadzeniu wszystkich informacji poprawnie - uzyskamy dostêp do konta.

£atwo rozszerzyæ iloœæ kont, adresów email i iloœæ obrazków.




Dane logowania do kont (wpisywaæ bez cudzys³owów):
	login: "123456", has³o: "ela", obrazek: pierœcieñ
	login: "654321", has³o: "dobre", obrazek: pies
	login: "admin", has³o: "admin", obrazek: kot
	login: "123123", has³o "123123", obrazek: pierœcieñ
	
Dane dostêpowe do kont mailowych (trzy konta maj¹ ten sam email, dla u³atwienia sprawdzania):
	email: "przypadkowy.klient@gmail.com", has³o: "zaq1@WSX123"
	email: "bank.bezpieczny@gmail.com", has³o: "zaq1@WSX123"
	
	
	
	
	




Tak wygl¹daj¹ dane w bazie danych:
	{ login: "123456", safeicon: "ring", password: "73950d9acf672365ad26ffddb060a752ec871263400c2801d7309b204d5ff980", cash: 10, email: "przypadkowy.klient@gmail.com" },
	{ login: "654321", safeicon: "dog", password: "7dbf606842607c9e0ae317910aabf2d2fbf9e93e9ddd21b1faf6e329887112a0", cash: 98, email: "przypadkowy.klient@gmail.com" },
	{ login: "admin", safeicon: "cat", password: "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918", cash: 10001, email: "bank.bezpieczny@gmail.com" },
	{ login: "123123", safeicon: "ring", password: "96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e", cash: 1020, email: "przypadkowy.klient@gmail.com" }

	
	
Ca³a strona by³a testowana na chrome.
Aby wystartowaæ, wystarczy uruchomiæ plik "index.html"