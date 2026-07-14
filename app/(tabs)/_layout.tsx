import { Color, Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"  // ROUTER (index.tsx)
        options={{
          title: 'Home',
          headerShown:false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      {/* <Tabs.Screen
        //name="about"
        name="signup"  // ROUTER (signup.tsx)
        options={{
          title: 'SignUp',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-add-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        //name="contact"
        name="login"  // ROUTER (login.tsx)
        options={{
          title: 'Login',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="log-in-outline" color={color} size={size} />
          ),
        }}
      /> */}
      <Tabs.Screen
         name="product"  // ROUTER (product.tsx)
         options={{
          headerShown:false,
          //title:'Product',
          tabBarIcon:({ color,size})=>(
            <Ionicons name="pricetags" color={color} size={size} />
          ),
         }}
      />
      <Tabs.Screen
          name="product_details"  // ROUTER (product_details.tsx)
          options={{
            headerShown:false, // dont show the default header at the top
            tabBarIcon :({color,size})=>(
              <Ionicons name="pricetag-outline" color={color} size={size}/>
            ),
          }}
          />
          {/* <Tabs.Screen 
            name="forgetPassword"  // routing file name ( eg forgetPassword.tsx)
            options={{
              tabBarIcon :({color,size})=>(
                <Ionicons name="key-outline" color={color} size={size}/>
              ),
            }}
            />
            <Tabs.Screen
             name="resetPassword"
             options={{
                 tabBarIcon :({color,size})=>(
              <Ionicons name="lock-closed-outline" color={color} size={size}/>
            ),
             }}
             /> */}
             <Tabs.Screen 
               name="checkout"
               options={{
                headerShown:false,
                          tabBarIcon :({color,size})=>(
              <Ionicons name="pricetags" color={color} size={size}/>
            ),
               }}
               />
                <Tabs.Screen 
               name="cart"
               options={{
                headerShown:false,
                          tabBarIcon :({color,size})=>(
              <Ionicons name="cart" color={color} size={size}/>
            ),
               }}
               />

                   <Tabs.Screen 
               name="profile"
               options={{
                headerShown:false,
                          tabBarIcon :({color,size})=>(
              <Ionicons name="person-circle" color={color} size={size}/>
            ),
               }}
               />
    </Tabs>
  );
}
