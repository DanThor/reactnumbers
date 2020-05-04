import React from "react";
import View from "../../components/View";
import Search from "../../components/Search";
import Result from "../../components/Result";

const Index = () => {
    const [searchResult, setSearchResult] = React.useState("");
    const [searchText, setSearchText] = React.useState("");
  
    React.useEffect(() => {
      const rootUrl = "https://random-number-fact.netlify.app/";
  
      if (!searchText) {
        return;
      }
  
      fetch(`${rootUrl}${searchText}?json`)
         .then((res) => res.json())
        .then((json) => {
            if (json) {
            setSearchResult(json);
            }
        });
    }, [searchText]);

    return (
        <View>
        <Search handleChange={(e) => setSearchText(e.target.value)} />
            <Result text={searchResult.text} />
        </View>
    )
}

export default Index;