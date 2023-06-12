# HTML

HTML stands for Hyper Text Markup Language. It was created in 1989 by Tim Berners-Lee and Robert Calliau. HTML is used to define the structure and content of a webpage.(Building blocks of web pages)

**HyperText:** The document containes links that allow the reader to jump from one page to other page quickly and easily.
**Markup Language:** Markup Language is a way computers speack to each other to control how text is processed and presented. A markup language allows you to annotate text, and these annotations provide additional meaning to the contents of a document(Tags are markup). 

To implement this HTML has:

**1. Tags:** Tags are used to **mark up the start of an HTML element**. The syntax for tags is `<element-name>`. Most tags should be closed `</element-name>`. In simple terms Tags act like contaiers. They tell us someting about the information about that lies between opening and closing tags.

<i><b>Note:</b> The terms "tag" and "element"
are often used interchangeably. g, however, an
element comprises the opening tag and the closing tag and any content that lies between them.</i>



**2. Attributes:** Attributes are used to provide the **additional pieces of information** about the contents of an element. Attributes are placed inside an opening tag and every atrribute has two parts the name and value. syntax for attributes is

```html
<element-name attribute-name="attribute-value">
```

<i><b>Note: HTML5 allows uppercase atribute names and quotemarks can be ommited, but its a convention to use lowecase for attributes with quotes for attribute value.</b> </i>


**Rules:**

1. Tags usually come in pairs. The opening tag denotes
the start of a piece of content; the closing tag denotes
the end.
2. While using mutiple tags, the tags must be closed in the order they are opened.

Example: 
```html
<p> This is an <b>Example.</b></p>
```
## Structure

1. `<body>`: Everything inside this element is
shown inside the main browser
window.

2. `<head>`: Before the `<body>` element you will often see a `<head>` element. This contains information about the page

3. `<title>`: You will usually find a `<title>` element inside the `<head>` element. The contents of the `<title>`
element are either shown in the top of the browser, above where you usually type in the URL of the page you want to visit, or on the tab for that page (if your browser uses tabs to allow you to view multiple pages at the same time).



## Text

### Headings

HTML has six "levels" of headings:

1. `<h1>`
2. `<h2>`
3. `<h3>`
4. `<h4>`
5. `<h5>`
6. `<h6>`

The number of heading is inversly propotional to the precedence of the heading. `<h1>` is the main heading and all the heading after that would be sub headings.


### Paragaraphs

A paragraph consists of one or more sentences that form a self-contained unit of discourse. The start of a paragraph is indicated by a new line. 

```html

<p>By default, a browser will show
each paragraph on a new line
with some space between it and
any subsequent paragraphs</p>
```

### Bold & Italic

By enclosing the text in `<b>` `</b>` the text appears bold.

Ex: Keywords in a paragarph.

By enclosing words in the tags `<i>` and `</i>`  text appear italic. The `<i>` element also represents
a section of text that would be said in a different way from surrounding content.

Ex: Technical terms, names of ships,
foreign words, and thoughts etc.


### SUPERSCRIPT & SUBSCRIPT


- The `<sup>` element is used to contain characters that
should be superscript such as the suffixes of dates or
mathematical concepts like raising a number to a power.

- The <sub> element is used to contain characters that should be subscript. It is commonly used with foot notes or chemical formulas.


### White space collapsing

In order to make code easier to read, web page authors often add extra spaces or start some elements on new lines.
When the browser comes across two or more spaces next to each other, it only displays one space. Similarly if it c`omes across a line break, it treats that as a single
space too. This is known as white space collapsing.


### LINE BREAKS & HORIZONTAL RULES

- Line break `<br>` is used to display the content in paragraph in next line.
- Horizantal rule is used to add the horizantal line in the paragraph. Example where `<hr>` is used are: a change of topic in a book or a new scene in a play


### Strong & Emphasis


- The use of the `<strong>` element indicates that its
content has strong importance. For example, the words
contained in this element might be said with strong emphasis. By default, browsers will show the contents of a `<strong>` element in bold.

- The <em> element indicates emphasis that subtly changes
the meaning of a sentence. By default browsers will show
the contents of an <em> element in italic.

## <i>Additioanl Reading</i>


1. Quotations: `<blockquote>` and `<q>`.
2. Abbrevations and Acronyms: `<abbr>`
3. Citations & Definitions: `<cite>`, `<dfn>`.
4. Author details: `<address>`
5. Changes to content: `<ins>`, `<del>` and `<s>`.


## Lists

1. **Ordered lists**: Ordered lists  are lists where each item in the list is numbered. For Ex: recipe and legal contract.

```html
<ol>
  <li> Each item in the list  </li>
</ol>
```

2. **Unordered lists**: Unordered lists are lists that begin with a bullet point (rather than characters that indicate order).

```html
<ul>
  <li> Each item in the list  </li>
</ul>
```

3. **Definition lists:** Definition lists are made up of a set of terms along with the definitions for each of those terms.

```html
<dl>
    <dt>the definitionterm</dt>
    <dd>The definition</dd>

</dl>
```

<i><b>Note:</b>Lists can be nested inside one another and the browser provided the indentation for the nested lists.</i>


## Links

`<a>``</a>` is used to link one webage in the other webiste(absolute url) or the existing website(relative url).

```html
<a href="link"></a>

```

- to open the link in new tab use `target= "_blank"`.
- to create a link to an email use `<a href="mailto:email">`email</a>
- To link to specific part of same page ids can be used.
- To link to specific part of different page user absolute-url/#id ad href. 

## Images

The synatx for images is

```html
<img src="image url" alt="text that describes the image" title="Additional info about image. usually displayed as tooltip">
```

- save images in right format, size and resolution.
- HTML5 has `<figure>` tag with `<img>` tag and `<figcaption>` tags inside it.

## Tables

- The `<table>` element is used to create a table. The contents of the table are written out row by row.
- You indicate the start of each row using the opening `<tr>` tag. (The tr stands for table row.) 
- Each cell of a table is represented using a `<td>` element. (The td stands for table data.)
- The `<th>` element is used just like the `<td>` element but its purpose is to represent the heading for either a column or a row. (The th stands for table heading.) scope attribute i sused to specify col and row.
- spanning rows can be created for `<th>` and `<td>` tags using colspan = "no of cells" attribute. 
- The headings of the table should sit inside the `<thead>` element.
- The body should sit inside the `<tbody>` element. 
- The footer belongs inside the `<tfoot>` element.
## HTML forms


- Form controls live inside a `<form>` element. This element should always carry the action attribute and will usually have a method and id attribute too.

- Every `<form>` element requires an action attribute. Its value is the URL for the page on the server that will receive the information in the form when it is submitted.

- Forms can be sent using one of two methods: get or post.

### HTML5 form validation:





## Additional Markup



## Flash Video and Audio



Navigate to this [link](Html-tags-and-attributes.html) to view the HTML Tags and Attribute explanation with examples.

