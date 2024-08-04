import React,{useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import SearchBar from "../components/SearchBar";
import useResult from "../hooks/useResult";
import ResultsList from "../components/ResultsList";

const searchScreen = () => {
  const [ term, setTerm] = useState("");
  const [results , searchApi] = useResult()
    const [events, setEvents] = useResult()
    const filterResultsByPrice =(price)=>{
      return results.filter((result)=>{
          return result.price === price;
      })

    }
  return ( <View>
        <SearchBar
            term={term}
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}
        />
          <Text> We have found {results.length} results</Text>
          <ResultsList title={'Cost Effective'} results={filterResultsByPrice('$')} />
          <ResultsList  title={'Bit Pricier'} results={filterResultsByPrice('$$')} />
          <ResultsList title={'Big Spender '} results={filterResultsByPrice('$$$')} />


      </View>
  );

};
const styles = StyleSheet.create({

})



export default searchScreen;
