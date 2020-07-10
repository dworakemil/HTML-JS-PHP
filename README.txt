Przyk�ad strony logowania do banku.
Ca�a baza danych, jest zaimplementowana w kodzie, nale�y j� traktowa� jako przyk�ad. Ta implementacja bazy danych nie jest bezpieczna.


Przy pr�bie zalogowania jeste�my pytani o login, nast�pnie o has�o. Has�o jest szyfrowane funkcj� SHA256 i hash jest por�wnywany z hashem zapisanym w bazie danych.
Przy wpisywaniu has�a widzimy obrazek kt�ry w ko�cowej wersji banku mo�na by samemu ustawi�. Doda�em trzy przyk�adowe obrazki, to jest pier�cie�, kot i pies. Dzi�ki temu mamy pewno��, �e logujemy si� na dobre konto i przede wszystkim na w�a�ciwej stronie bankowej, a nie stronie kt�ra si� podszywa pod nasz bank.
Po wpisaniu odpowiedniego has�a, na adres email (przypisany do konta) jest wysy�any sze�ciocyfrowy kod dost�pu. Dopiero po wprowadzeniu wszystkich informacji poprawnie - uzyskamy dost�p do konta.

�atwo rozszerzy� ilo�� kont, adres�w email i ilo�� obrazk�w.




Dane logowania do kont (wpisywa� bez cudzys�ow�w):
	login: "123456", has�o: "ela", obrazek: pier�cie�
	login: "654321", has�o: "dobre", obrazek: pies
	login: "admin", has�o: "admin", obrazek: kot
	login: "123123", has�o "123123", obrazek: pier�cie�
	
Dane dost�powe do kont mailowych (trzy konta maj� ten sam email, dla u�atwienia sprawdzania):
	email: "przypadkowy.klient@gmail.com", has�o: "zaq1@WSX123"
	email: "bank.bezpieczny@gmail.com", has�o: "zaq1@WSX123"
	
	
	
	
	




Tak wygl�daj� dane w bazie danych:
	{ login: "123456", safeicon: "ring", password: "73950d9acf672365ad26ffddb060a752ec871263400c2801d7309b204d5ff980", cash: 10, email: "przypadkowy.klient@gmail.com" },
	{ login: "654321", safeicon: "dog", password: "7dbf606842607c9e0ae317910aabf2d2fbf9e93e9ddd21b1faf6e329887112a0", cash: 98, email: "przypadkowy.klient@gmail.com" },
	{ login: "admin", safeicon: "cat", password: "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918", cash: 10001, email: "bank.bezpieczny@gmail.com" },
	{ login: "123123", safeicon: "ring", password: "96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e", cash: 1020, email: "przypadkowy.klient@gmail.com" }

	
	
Ca�a strona by�a testowana na chrome.
Aby wystartowa�, wystarczy uruchomi� plik "index.html"