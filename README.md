<!-- TOC start (generated with https://github.com/derlin/bitdowntoc) -->

- [api-genie-doc-html-template](#api-genie-doc-html-template)
  - [Usage](#usage)
  - [Development](#development)
    - [Commands](#commands)
    - [Components](#components)
    - [Styling](#styling)
    - [Localization](#localization)
    - [Tests](#tests)
  - [License](#license)
  - [Contributing](#contributing)
  - [👀 Want to learn more?](#-want-to-learn-more)
  - [Component Reference](#component-reference)

<!-- TOC end -->

<!-- TOC --><a name="api-genie-doc-html-template"></a>
# api-genie-doc-html-template

This is a template for beautiful API documentation websites.

(!) Ten pakiet dostarcza reuzywalnych komponentów do tworzenia ładnej dokumentacji API ! Został on wydzielony z generatora po to, zeby dało się dostosowywać wygląd wygenerowanej dokumentacji bez konieczności jej ponownej generacji. Oto link na artykuł na blogu API Genie w którym wyjaśniam dlaczego takie rozdzielenie ma sens.

(!) Najlepiej współpracuje z API Genie i jego generatorem dokumentacji (polecenie `generate doc html`). API Genie to narzędzie ułatwiające tworzenie API Webowych w oparciu o standard OpenAPI i podejście schema-first.

Poniewaz API Genie uzywa specyfikacji OpenAPI, wiele pojęć z tej specyfikacji znalazło swoje odpowiedniki w tym szablonie. Przykładowo, nazwy oraz funkcja komponentów szablonu często są identyczne do nazw obiektów ze specyfikacji (jak np. `Operation` lub `SecurityRequirement`).

Oto kilka przykładów witryn z dokumentacją wygenerowanych za pomocą API Genie oraz tego szablonu.

- Real World
- GitHub
- Pager Duty

<!-- TOC --><a name="usage"></a>
## Usage

(!) Mozesz to robić na dwa sposoby:

(!) 1) z API Genie, kiedy to generujemy dokumentację (która składa się z konkretnych komponentów oraz gotowych juz stron). Zaletą tej metody jest prostota a jednocześnie elastyczność. Prawdopodobnie będziesz z niej korzystał przez większość czasu. Oto link na tutorial API Genie, który pozwoli Tobie na szybki start !

(!) 2) osobno. W tym przypadku uzywamy innego generatora (lub składamy konkretne komponenty oraz strony) do zbudowania konkretnych komponentów.

<!-- TOC --><a name="development"></a>
## Development

So you decided to modify the template itself. Wtedy czytaj dalej :)

Ten szablon uzywa dwóch framework-ów - Astro oraz Tailwind CSS. Więc zanim zaczniesz dewelopować, warto zebyś się zapoznał z podstawami obu.

Poniewaz szablon uzywa Astro, jego structura jest typowa dla projektów uzywających Astro.

Tak to wygląda na dysku. Pokazałem foldery oraz najbardziej istotne pliki.

```text
/
├── public/
├── src/
│   ├── components/
│   │   ├── code/
│   │   ├── header/
│   │   ├── operation/
│   │   ├── overview/
│   │   ├── schema/
│   │   ├── search/
│   │   └── sidebar/
│   ├── i18n/
│   ├── icons/
│   ├── layouts/
│   └── pages/
│       └── dev.astro
└── package.json
```

- `src/components` zawiera wszystkie komponents. Bespośrednio w tym katalogu znajdują się większe komponenty. Dla kazdej duzej sekcji jest osobny podfolder zawierający mniejsze komponenty.
  - `src/components/code` - komponenty do pokazywania przykładów kodu
  - `src/comonents/header` - nagłówek najwyzszego poziomu. Tutaj znajdują się np. komponenty do przełączania języka oraz jasnej / ciemniej skórki
  - `src/components/operation` - podkomponenty do przedstawiania poszczególnych klocków informacji o operacjach zdefiniowanych w API.
  - `src/components/overview`
- `src/i18n` - mechanizm tłumaczeń
- `src/icons` - ikonki uzywane w komponentach szablonu
- `src/layouts` - domyślny layout strony
- `src/pages` - znajduje się jedyna strona która będzie uzyteczna podczas dewelopmentu. Ale nie trafia ona do witryny ze zbudowaną dokumentacją.

<!-- TOC --><a name="commands"></a>
### Commands

Useful commands.

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |


<!-- TOC --><a name="components"></a>
### Components

Idea przyświecająca mi podczas tworzenia tego szablonu jest bardzo prosta. Nalezy rozdzielić generowanie danych oraz struktury witryny od jej wyglądu. Wtedy kazdy z tych aspektów da się zmieniać niezaleznie (a najczęściej z konkretnej sytuacji musimy zmieniać tylko jeden z nich).

This subsection contains description of template components. Each component describes its purpose, properties, and slots.

<!-- TOC --><a name="styling"></a>
### Styling

Do stylowania komponentów szablon uzywa Tailwind CSS. 

Skórka (czcionki, kolory, odstępy) są konfigurowane w pliku konfiguracyjnym TailwindCSS.

<!-- TOC --><a name="localization"></a>
### Localization

Szablon uzywa bardzo prostego mechanizmu do tłumaczeń. Tłumaczenia przechowuje w plikach JSON w folderze `src/i18n`. 
W kodzie komponentów jest uzywana jedna funkcja, `useTranslation()`.

```astro
---
import { useTranslation } from '...../i18n';

// Zbiór wspieranych języków jest zdefiniowany w pliku src/i18n/index.js
// Domyślny język jest przekazywany w obiekcie Astro.locals. Jeśli korzystasz z API Genie, on generuje małe middleware który odpowiednio ustawia tę wartość.
// Biezący język jest wyłuskiwany z URLa generowanej strony.

const __ = useTranslation(Astro);

// funkcja __(key) zwraca przetłumaczony literal w biezącym języku. Biezący język jest wyłuskiwany z URL-a, natomiast
---

<div>{__('some.key')}</div> 
```



<!-- TOC --><a name="tests"></a>
### Tests


<!-- TOC --><a name="license"></a>
## License

This project is MIT-licensed.


<!-- TOC --><a name="contributing"></a>
## Contributing

Uwaga. Podczas wyznaczania roadmapy oraz zakresu funkcjonalności tego szablonu zawsze będzie uwzględniany API Genie. Niestety pomysły które ida w poprzek koncepcji API Genie nie będa mogły znaleźć się w projekcie. Ale poniewaz szablon jest otwartoźródłowy (stosuje licensję MIT), mogą znaleźć się w Waszym forku.

Proces kontrybuowania do szablonu jest prosty:

1. zakładamy issue w repozytorium na GitHub
2. jeśli ustalamy ze to jest zmiana wartościowa, klonujesz repozytorium
3. tworzysz branch
4. wprowadzasz zmiany
5. wystawiasz pull request-a
6. zmiany lądują w najblizszej wersji

<!-- TOC --><a name="-want-to-learn-more"></a>
## 👀 Want to learn more?

Visit API Genie website ! Or contact directly with author.

<!-- TOC --><a name="component-reference"></a>
## Component Reference

`Header`

Ten komponent słuzy jako nagłówek najwyzszego poziomu. Mieści logo, pole do wyszukiwania, a takze przełączniki skórki oraz (w przypadku dokumentacji wielojęzycznych) języka.

**Properties**:
**Slots**:

`Sidebar`

This is the main navigation component. Provides links to all important sections of the documentation.

**Properties**: 
**Slots**:

`Overview`

Ten komponent zawiera ogólne informacje o API, takie jak nazwa, opis, lista serwerow, oraz mechanizmy autoryzacji.

**Properties**
**Slots**

`Operation`

Chyba najczęściej uzywany komponent. Zawiera on informacje o pojedynczej operacji (= połączeniu endpoint-a z metodą HTTP). Składa się z następujących sekcji:

`summary` - nazwa, URL, metoda, ID operacji
`description` - opis (Markdown)
`parameters` - lista parametrów
`requestBody` - opis request body, wraz z przykładami kodu opcjonalny
`responses` - lista zwrotek wraz z przykładami kodu oraz schem zwrotek
`usage` - lista zasobów (współdzielonych modeli danych), uzywanych przez daną operację, opcjonalna
`changelog` - lista zmian w danej operacji, opcjonalna

Pokazuje równiez lokalną nawigację, pozwalającą na szybkie przeskakiwanie pomiędzy podsekcjami danego komponentu.

**Properties**
**Slots**

`Resource`

W terminologii API Genie (a zarazem tego szablonu) zasób to jest Schema (= struktura danych), która ma swoją nazwę. 

API Genie uznaje za zasób kazdy schemat znajdujący się w sekcji `components`.

**Properties**
**Slots**

`Group`

Grupuje komponenty operacje oraz zasoby. Jest uzywany przez API Genie na stronach pokazujących np. grupy operacji, lub na "single" stronie zawierającej wszystko. 

**Properties**
**Slots**

`search/SearchForm`

Formularz strony wyszukiwania. Pozwala na wskazanie kryteriów wyszukiwania.

**Properties**
**Slots**

`search/SearchResults`

Opakowuje wyniki wyszukiwania. Domyślna implementacja zapewnia skrolowanie, sortowanie oraz prezentację wyników w postaci tabeli.

**Properties**
**Slots**

`search/SearchEntry`

Pojedynczy element który moze znaleźć się na liście wyników.

Domyślnie renderuje się jako znacznik `<tr>`.

**Properties**

`type` - typ elementu. Rozpoznawanymi wartościami są `operation` lub `resource`.
`method` - metoda HTTP. Słuzy do filtrowania.
`url` - URL operacji
`href` - wewnętrzny link do strony/sekcji przedstawiającej szczegóły danego elementu.
`summary` - krótki opis elementu

**Slots**

brak