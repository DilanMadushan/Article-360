import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image,ScrollView } from "react-native";

const DisplayArticle = () => {
  
  return (
     <LinearGradient colors={["#1E1E1E", "#292929"]} style={styles.container}>
          <StatusBar style="dark" />
          <ScrollView style={styles.scrollView}>
            
            <Text style={styles.title}>Imposible Nothing</Text>

            <Image source={{ uri: 'https://wbcboxing.com/wp-content/uploads/ali-artew.jpg'}} style={styles.image} />

            <Text style={styles.content}>
            “I hated every minute of training, but I said, ‘Don’t quit. Suffer now and live the rest of your life as a champion.”

These words by Muhammad Ali embody the spirit of a man who was more than just a boxer—he was an icon, a warrior, and an inspiration to millions worldwide. His journey from a young boy named Cassius Clay to becoming “The Greatest” was filled with struggles, sacrifices, and victories, both inside and outside the ring.

Rising from Humble Beginnings
Born in Louisville, Kentucky, in 1942, Ali discovered his passion for boxing at the age of 12 after his bicycle was stolen. Determined to never be a victim again, he took up the sport and quickly made a name for himself. His speed, agility, and confidence set him apart, and by the age of 18, he had won an Olympic gold medal.

But Ali was not just a fighter in the ring—he was a fighter for justice.

A Champion with a Cause
In 1964, after defeating Sonny Liston to become the heavyweight champion, he shocked the world by changing his name from Cassius Clay to Muhammad Ali, embracing his faith and beliefs. His decision to refuse the Vietnam War draft in 1967 led to his title being stripped and a ban from boxing for nearly four years. Despite the setback, Ali stood firm, proving that principles mattered more than fame or fortune.

When he returned to the ring, he faced his greatest challenges—battles against legendary fighters like Joe Frazier and George Foreman. The famous “Rumble in the Jungle” in 1974 showcased his intelligence and resilience, as he used the "rope-a-dope" strategy to tire out Foreman before delivering the final knockout.

Beyond Boxing: A Legacy of Inspiration
Ali’s impact extended far beyond sports. His charisma, activism, and unwavering self-belief inspired generations. He stood against racism, war, and injustice, using his voice to fight for equality. Even after being diagnosed with Parkinson’s disease, he remained a symbol of hope and determination.

Muhammad Ali’s story teaches us that success is not just about talent—it’s about perseverance, belief, and the willingness to suffer now for greatness later. As he famously said:

“Don’t count the days, make the days count.”

And that’s exactly what he did. He lived, he fought, and he conquered—not just in boxing, but in life.

The Greatest Lives On
Ali may have left this world in 2016, but his legacy continues to inspire athletes, leaders, and dreamers. His story reminds us that no challenge is too big if we have the heart to fight. He taught us that champions are not born—they are made through struggle, sacrifice, and an unbreakable spirit.

Muhammad Ali will always be “The Greatest.”


            </Text>

          </ScrollView>

      </LinearGradient>
    
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#292929"
  },
  scrollView: {
    backgroundColor: '#292929',
    marginHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#ce3248",
    textAlign: "center",
    marginTop: 20,
  },
  image:{
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
    content:{
        fontSize: 16,
        color: "#ffffff",
        lineHeight: 24,
        margin: 10,
        textAlign: "justify",
        
    },
})

export default DisplayArticle