import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="information-circle" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: 'Contact',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="call" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
         name="product"
         options={{
          title:'Product',
          tabBarIcon:({ color,size})=>(
            <Ionicons name="pricetags" color={color} size={size} />
          ),
         }}
      />
      <Tabs.Screen
          name="product_details"
          options={{
            tabBarIcon :({color,size})=>(
              <Ionicons name="pricetag-outline" color={color} size={size}/>
            ),
          }}
          />
    </Tabs>
  );
}
