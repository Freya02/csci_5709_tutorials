# Tutorial 4

* *Date Created*: 12th February, 2024
* *Deployment URL*: 
* *Git URL*: 

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
* [Reference for Background Image](https://unsplash.com/)

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

