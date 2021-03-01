# HTML

<details>
<summary>Starter Template</summary>
<br>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    <!-- Stylesheets -->
    <link rel="stylesheet" href="#">

    <!-- Scripts -->
    <script src="#" defer="defer"></script>
  </head>

  <body>
    <header>
        <!-- Header -->
      <nav>
          <!-- Navigation -->
      </nav>
    </header>

    <main>
      <div class="container">
        <!-- Main Content -->
      </div>
    </main>

    <footer>
        <!-- Footer -->
    </footer>
  </body>
</html>
```
</details>



## Syntax

```html
<!-- Define file is HTML -->
<!DOCTYPE html>
<!-- desribe an HTML document -->
<html lang="en">

  <!-- Information about the document -->
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- title of the document -->
    <title>Document</title>

    <!-- Stylesheet -->
    <link rel="stylesheet" href="#">

    <!-- Script -->
    <script src="#" defer="defer"></script>
  </head>

<!-- visible page content -->
  <body>
    <!-- Content -->
  </body>
</html>
```

## Basics

```html
<html lang="en">                          <!-- Set locale -->
<meta charset="UTF-8">                    <!-- Set encode -->
<meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Set user`s visible area -->
<title>Document</title>                   <!-- Set page title -->
<link rel="shortcut icon" type="image/png" href="img/logo.png" /> <!-- document logo -->
<meta name="#" content="#">               <!-- Set metadata -->
<link rel="stylesheet" href="#">          <!-- include stylesheet -->
<script src="#" defer="defer"></script>   <!-- include script -->
<base>                            <!-- define base url for links -->
```


## Structural

```html
<header>                          <!-- header of document/section -->
<nav>                             <!-- navigation links -->
<main>                            <!-- main content -->
<article>                         <!-- self contained -->
<section>                         <!-- section of document/article -->
<aside>                           <!-- indirectly related to content -->
<footer>                          <!-- footer of document/section -->
<br>                              <!-- single line break -->
<hr>                              <!-- horizontal line -->
<h1> to <h6>                      <!-- headings -->
<hgroup>                          <!-- group headings -->
<details>                         <!-- collapsable -->
<summary>                         <!-- summary of <details> -->
```

## Formatting

```html
<small>                           <!-- small text -->
<strong>                          <!-- bold text -->
<sub>                             <!-- lowered baseline small text -->
<sup>                             <!-- raised baseline small text -->
<abbr>                            <!-- abbreviation -->
<address>                         <!-- enclose contact information -->
<bdi>                             <!-- bidirectional text -->
<bdo>                             <!-- bidirectional text overide -->
<blockquote>                      <!-- indicate an extended qoutation -->
<q>	                              <!-- in-line <blockqoute> -->
<cite>                            <!-- citation -->
<del>                             <!-- indicate deleted text -->
<ins>                             <!-- indicate added text -->
<mark>                            <!-- highlighted -->
<dfn>                             <!-- definition of term -->
<em>                              <!-- emphasized text -->
<pre>                             <!-- preformatted text -->
<code>                            <!-- monospace font -->
<kbd>                             <!-- keyboard input -->
<output>                          <!-- container element for results -->
<samp>                            <!-- sample output from computer program -->
<var>                             <!-- represent variable name -->
<wbr>                             <!-- word break opportunity -->
<dialog>                          <!-- interactive component -->
<time>                            <!-- time/date -->
```

## List

```html
<ul>                              <!-- unordered list -->
<ol>                              <!-- ordered list -->
<li>                              <!-- list item -->
<dl>                              <!-- description list -->
<dt>                              <!-- description term -->
<dd>                              <!-- description definition -->
<menu>                            <!-- list of command -->
```

## Table

```html
<table>                           <!-- tabular data -->
<thead>                           <!-- head of column -->
<th>                              <!-- header cell -->
<caption>                         <!-- table title -->
<tr>                              <!-- table row -->
<colgroup>                        <!-- define a group of column -->
<col>                             <!-- define column -->
<tbody>                           <!-- table body -->
<td>                              <!-- table data -->
<tfoot>                           <!-- table footer -->
```

## Embedded

```html
<map>                             <!-- define image map -->
<area>                            <!-- define a specific spot on <map> -->
<audio>                           <!-- embed sound -->
<canvas>                          <!-- used for graphics and animation -->
<embed>                           <!-- embed external content -->
<figure>                          <!-- self-contained content -->
<figcaption>                      <!--  caption for <figure>-->
<iframe>                          <!-- embed another html page -->
<img>                             <!-- embed image -->
<video>                           <!-- embed video -->
<object>                          <!-- container for external resource -->
<param>                           <!-- parameters for <object> -->
<source>                          <!-- alternative src="" -->
```

## Form

```html
<form>                            <!-- form for user input -->
<fieldset>                        <!-- set of related form fields -->
<legend>                          <!-- fieldset title -->
<label>	                          <!-- label for form fields -->
<input>                           <!-- input control -->
<datalist>                        <!-- predefind options for input -->
<textarea>                        <!-- multiline text input control -->
<select>                          <!-- selection list -->
<option>                          <!-- options for <select> -->
<optgroup>                        <!-- group related <option> -->
<meter>                           <!-- scalar value within a know range -->
<progress>                        <!-- progress bar -->
<button>                          <!-- clickable button -->
```


## Symbol

```html
%7C                               <!-- pipe on url -->
&lt;                              <!-- < -->
&gt;                              <!-- > -->
&nbsp;                            <!-- non-breaking space -->
&copy;                            <!-- copyright -->
&reg;                             <!-- registered trademark -->
&amp;                             <!-- & -->
&quot;                            <!-- " -->
&apos;                            <!-- ' -->
```

## Etc

```html
<!-- if script is unsupported/disabled -->
<noscript>Script is unavailable</noscript>

<!-- Target IE 8 and lower -->
<!--[if lt IE 9]>
  do something
<![endif]-->

<!-- Refresh every 30 seconds -->
<meta http-equiv="refresh" content="30" url="#">

<!-- use latest rendering engine -->
<meta http-equiv="X-UA-Compatible" content="ie=edge"/>
```