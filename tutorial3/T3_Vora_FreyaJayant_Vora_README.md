# Tutorial 3

* *Date Created*: 12th February, 2024
* *Deployment URL*: https://main--tut3-registration-form.netlify.app/
* *Git URL*: https://git.cs.dal.ca/fvora/csci_5709_tutorials/-/tree/main/Tutorial3?ref_type=heads

## Authors

* [Freya Jayant Vora](fr793929@dal.ca)

## Built With

* [React](https://legacy.reactjs.org/docs/getting-started.html/) - The web framework used
* [npm](https://docs.npmjs.com//) - Package Manager

## Sources Used

* [Color Palette Reference](https://www.color-hex.com/color-palette/53188)
* [useState Reference](https://react.dev/reference/react/useState)
* [useNavigate Reference](https://reactrouter.com/en/main/hooks/use-navigate)
* [Reference for HTML, CSS, and JS](https://developer.mozilla.org/en-US/)

The code above was created by adapting the template
in [React Router](https://www.w3schools.com/react/react_router.asp) as shown below:

*Link:* <https://www.w3schools.com/react/react_router.asp>

```
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
```

