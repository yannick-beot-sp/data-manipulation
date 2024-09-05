<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a id="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">

<h3 align="center">Data manipulation REST API</h3>

  <p align="center">
    Endpoints to manipulate JSON data
    <br />
    <a href="https://github.com/yannick-beot-sp/data-manipulation"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/yannick-beot-sp/data-manipulation/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/yannick-beot-sp/data-manipulation/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

The idea of this project is to manipulate the data through REST endpoints.

For each operation, the endpoint receive the data to manipulate in the body and the params as query parameters.

There is no logging on purpose.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

This small REST API relies on NodeJS and [Express](https://expressjs.com/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

Install NodeJS. This has been tested with the versions 18 and 20.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/yannick-beot-sp/data-manipulation.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Change git remote url to avoid accidental pushes to base project
   ```sh
   git remote set-url origin yannick-beot-sp/data-manipulation
   git remote -v # confirm the changes
   ```
4. Run the server
   ```sh
   npm start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

By default, any successfull operation returns a `200`.
Any invalid parameter would result in a `400`.

### Test / Healthcheck

<details>
 <summary><code>GET</code> <code><b>/?name=&lt;name&gt;</b></code>

#### Parameters

> | name | type     | data type | default | description |
> | ---- | -------- | --------- | ------- | ----------- |
> | Name | Optional | String    | World   | N/A         |

#### Response 200 (application/html)

> Hello &lt;name&gt;!

</details>

### Extract a property from an array of objects

<details>
 <summary><code>POST</code> <code><b>/extract?property=&lt;name&gt;</b></code>

#### Parameters

> | Name | Required | data type | description                                                |
> | ---- | -------- | --------- | ---------------------------------------------------------- |
> | name | Y        | String    | name of the property to used from objects inside the array |

#### Body

Array of objects. The Array can be empty. The body can be empty

##### Example

> ```
> [
>    {
>        "id": "1954bab361a145d6b828c3456f9d4592",
>        "name": "PRISM ERP - Report Admin",
>        "description": "Grants report administrator access to the PRISM ERP system."
>    },
>    {
>        "id": "69a487be846f458caa6b5549a38defca",
>        "name": "PRISM ERP - User Access",
>        "description": "Grants user access to the PRISM ERP system"
>    }
> ]
> ```

#### Response 200 (application/json)

Array of string

### Add an element (string or object) to an array

<details>
 <summary><code>POST</code> <code><b>/addRow?value=&lt;value&gt;</b></code>

#### Parameters

> | name  | Required | data type   | description                                                                               |
> | ----- | -------- | ----------- | ----------------------------------------------------------------------------------------- |
> | value | Y        | JSON Object | It must be a valid JSON object. To add a string, the string must be between double quotes |

#### Body

Array of objects. The Array can be empty. The body can be empty

##### Example

> ```
> [
>    {
>        "id": "1954bab361a145d6b828c3456f9d4592",
>        "name": "PRISM ERP - Report Admin",
>        "description": "Grants report administrator access to the PRISM ERP system."
>    },
>    {
>        "id": "69a487be846f458caa6b5549a38defca",
>        "name": "PRISM ERP - User Access",
>        "description": "Grants user access to the PRISM ERP system"
>    }
> ]
> ```

#### Response 200 (application/json)

Array of objects

</details>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

_TBD_

See the [open issues](https://github.com/yannick-beot-sp/data-manipulation/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Top contributors:

<a href="https://github.com/yannick-beot-sp/data-manipulation/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=yannick-beot-sp/data-manipulation" alt="contrib.rocks image" />
</a>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/yannick-beot-sp/data-manipulation.svg?style=for-the-badge
[contributors-url]: https://github.com/yannick-beot-sp/data-manipulation/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/yannick-beot-sp/data-manipulation.svg?style=for-the-badge
[forks-url]: https://github.com/yannick-beot-sp/data-manipulation/network/members
[stars-shield]: https://img.shields.io/github/stars/yannick-beot-sp/data-manipulation.svg?style=for-the-badge
[stars-url]: https://github.com/yannick-beot-sp/data-manipulation/stargazers
[issues-shield]: https://img.shields.io/github/issues/yannick-beot-sp/data-manipulation.svg?style=for-the-badge
[issues-url]: https://github.com/yannick-beot-sp/data-manipulation/issues
[license-shield]: https://img.shields.io/github/license/yannick-beot-sp/data-manipulation.svg?style=for-the-badge
[license-url]: https://github.com/yannick-beot-sp/data-manipulation/blob/master/LICENSE.txt
[product-screenshot]: images/screenshot.png
