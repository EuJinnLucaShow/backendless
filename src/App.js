import { Navigate, Route, Routes, Link } from "react-router-dom";
import tabs from "./tabs.json";
import { LazyLoader } from "./components/LazyLoader";
import { Tab } from "./components/Tab";


function App() { 

  const firstTabId = tabs[0].id;

  return (
    <>
      <nav style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', marginTop: 20 }}>
      {tabs.map((tab) => (        
        <Link key={tab.id} to={`/${tab.id}`}>
            {tab.title}
          </Link>
        ))}
        </nav>

      <Routes>
        {tabs.map((tab) => {
          return (
            <Route
              key={tab.id}
              path={`/${tab.id}`}
              element={
                <Tab
                  title={tab.title}
                  data={<LazyLoader path={tab.path} /> }
                />
              }
            />
          );
        })}
        <Route
          path="*"
          element={
            <Tab
              title="Not Found"
              data={<LazyLoader path="components/NotFound.jsx" />}
            />
          }
        />
        <Route index element={<Navigate to={`/${firstTabId}`} />} />
      </Routes>
    </>
  );
}

export default App;