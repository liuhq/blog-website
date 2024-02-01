---
title: 'Markdown Style Test'
date: 2023-11-22
category: 'Test'
tags:
    - 'a tag'
pinned: true
---

This post is originated from [here](https://gist.github.com/apackeer/4159268) and is used for testing markdown style. This post contains nearly every markdown usage. Make sure all the markdown elements below show up correctly.

------

## Headers

```markdown
# H1  Alternatively, for H1 and H2, an underline-ish style: Alternatively, for H1 and H2, an underline-ish style: Alternatively, for H1 and H2, an underline-ish style:
## H2
### H3
#### H4
##### H5
###### H6

Alternatively, for H1 and H2, an underline-ish style:

Alt-H1
======

Alt-H2
------
```

# H1

## H2

### H3

#### H4

##### H5

###### H6

Alternatively, for H1 and H2, an underline-ish style:

Alt-H1
======

Alt-H2
------

---

## Emphasis

```markdown
Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~
```

Emphasis, aka italics, with *asterisks* or _underscores_

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this~~.

## Lists

```markdown
1. First ordered list item
2. Another item
  * Unordered sub-list.

1. Actual numbers don't matter, just that it's a number
  1. Ordered sub-list
2. And another item.

- [ ] Checkbox list
- [x] Checked

   You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

   To have a line break without a paragraph, you will need to use two trailing spaces.
   Note that this line is separate, but within the same paragraph.
   (This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

* Unordered list can use asterisks
- Or minuses
+ Or pluses
- Paragraph In unordered list

  For example like this.

Common Paragraph with some text.
And more text.
```

1. First ordered list item
2. Another item
    * Unordered sub-list.


1. Actual numbers don’t matter, just that it’s a number
   1. Ordered sub-list
2. And another item.

- [ ] Checkbox list
- [x] Checked

  You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we’ll use three here to also align the raw Markdown).

  To have a line break without a paragraph, you will need to use two trailing spaces.

  Note that this line is separate, but within the same paragraph. (This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

* Unordered list can use asterisks
- Or minuses
+ Or pluses
- Paragraph In unordered list

  For example like this.

Common Paragraph with some text.
And more text.

## Inline HTML

```markdown
<p>To reboot your computer, press <kbd>ctrl</kbd>+<kbd>alt</kbd>+<kbd>del</kbd>.</p>
```

<p>To reboot your computer, press <kbd>ctrl</kbd>+<kbd>alt</kbd>+<kbd>del</kbd>.</p>

```markdown
<dl>
    <dt>Definition list</dt>
    <dd>Is something people use sometimes.</dd>

    <dt>Markdown in HTML</dt>
    <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>
```

<dl>
    <dt>Definition list</dt>
    <dd>Is something people use sometimes.</dd>
    <dt>Markdown in HTML</dt>
    <dd>Does <i>not</i> work <b>very</b> well. Use HTML <em>tags</em>.</dd>
</dl>

## Links

```markdown
[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](https://astro.build/)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself]

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://astro.build/
[1]: https://astro.build/
[link text itself]: https://astro.build/
```

[I'm an inline-style link (a long long long long long long long long long long long long long long long long long long long long long long long link)](https://www.google.com)

[I'm an `inline-style` link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](https://astro.build/)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself]

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://astro.build/
[1]: https://astro.build/
[link text itself]: https://astro.build/

## Images

```markdown
hover to see the title text:

Inline-style:

![alt text](https://astro.build/favicon.svg "Logo Title Text 1")

Reference-style:

![alt text][logo]

[logo]: https://astro.build/favicon.svg "Logo Title Text 2"
```

hover to see the title text:

Inline-style:

![alt text](https://astro.build/favicon.svg "Logo Title Text 1")

Reference-style:

![alt text][logo]

[logo]: https://img.youtube.com/vi/gxBkghlglTg/0.jpg "Astro"

## Code and Syntax Highlighting

Inline `code` has `back-ticks around` it.

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

```python
s = "Python syntax highlighting"
print s
```

```
No language indicated, so no syntax highlighting.
But let's throw in a <b>tag</b>.
```

## Tables

```markdown
|                |ASCII                          |HTML                         |
|----------------|-------------------------------|-----------------------------|
|Single backticks|`'Isn't this fun?'`            |'Isn't this fun?'            |
|Quotes          |`"Isn't this fun?"`            |"Isn't this fun?"            |
|Dashes          |`-- is en-dash, --- is em-dash`|-- is en-dash, --- is em-dash|
```

|                |ASCII                          |HTML                         |
|----------------|-------------------------------|-----------------------------|
|Single backticks|`'Isn't this fun?'`            |'Isn't this fun?'            |
|Quotes          |`"Isn't this fun?"`            |"Isn't this fun?"            |
|Dashes          |`-- is en-dash, --- is em-dash`|-- is en-dash, --- is em-dash|

Colons can be used to align columns.

```markdown
| Tables        |      Are      |          Cool |
| ------------- | :-----------: | ------------: |
| col 3 is      | centered      | right-aligned |
| col 2 is      | yes           | no            |
| zebra stripes | are neat      | it            |
```

| Tables        |      Are      |          Cool |
| ------------- | :-----------: | ------------: |
| col 3 is      | centered      | right-aligned |
| col 2 is      | yes           | no            |
| zebra stripes | are neat      | it            |

The outer pipes (|) are optional, and you don’t need to make the raw Markdown line up prettily. You can also use inline Markdown.

```markdown
| Markdown | Less      | Pretty
| -------- | --------- | ----------
| *Still*  | `renders` | **nicely**
| 1        | 2         | 3
```

| Markdown | Less      | Pretty
| -------- | --------- | ----------
| *Still*  | `renders` | **nicely**
| 1        | 2         | 3

> You can find more information about **LaTeX** mathematical expressions [here](https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference).

## Blockquotes

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let’s keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.

## Horizontal Rule

Three or more…

```markdown
---

Hyphens

***

Asterisks

___

Underscores
```

------

Hyphens

***

Asterisks

___

Underscores

## Line Breaks

```markdown
Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a *separate paragraph*.

This line is also a separate paragraph, but...
This line is only separated by a single newline, so it's a separate line in the *same paragraph*.
```

Here’s a line for us to start with.

This line is separated from the one above by two newlines, so it will be a *separate paragraph*.

This line is also a separate paragraph, but…
This line is only separated by a single newline, so it’s a separate line in the *same paragraph*.

------

```markdown
This is a regular paragraph.

<table>
    <tr>
        <td>Foo</td>
    </tr>
</table>

This is another regular paragraph.
```

This is a regular paragraph.

<table>
    <tr>
        <td>Foo</td>
    </tr>
</table>

This is another regular paragraph.

## Youtube videos

```markdown
<a href="https://youtube.com/watch?v=gxBkghlglTg" target="_blank">
    <img src="https://img.youtube.com/vi/gxBkghlglTg/0.jpg" alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" />
</a>

Pure markdown version:

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/gxBkghlglTg/0.jpg)](https://youtube.com/watch?v=gxBkghlglTg)
```

<a href="https://youtube.com/watch?v=gxBkghlglTg" target="_blank">
<img src="https://img.youtube.com/vi/gxBkghlglTg/0.jpg" alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" />
</a>

Pure markdown version:

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/gxBkghlglTg/0.jpg)](https://youtube.com/watch?v=gxBkghlglTg)
