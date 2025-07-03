import { ThemedText } from '@/components/ThemedText';
import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedTextInput from '@/presentation/shared/ThemedTextInput';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const TextInputsScreen = () => {

  const [form, setForm] = useState({
    email: '',
    name: '',
    phone: '',
  })

  return (
    <KeyboardAvoidingView
      behavior='height'
    >
      <ScrollView>
        <ThemedView className='px-5  flex-1' >

          <ThemedCard className='mb-4'>
            <ThemedTextInput
              onChangeText={(text) => setForm((prev) => ({ ...prev, name: text }))}
              className='border border-gray-300 rounded-md p-2 mb-4'
              placeholder='Nombre completo'
              autoCapitalize='words'
              autoCorrect={false}
              keyboardType='default'
            />
            <ThemedTextInput
              onChangeText={(text) => setForm((prev) => ({ ...prev, email: text }))}
              className='border border-gray-300 rounded-md p-2 mb-4'
              placeholder='Correo electrónico'
              autoCapitalize='words'
              autoCorrect={false}
              keyboardType='email-address'
            />
            <ThemedTextInput
              onChangeText={(text) => setForm((prev) => ({ ...prev, phone: text }))}
              className='border border-gray-300 rounded-md p-2 mb-4'
              placeholder='Telefono'
              autoCapitalize='words'
              autoCorrect={false}
              keyboardType='phone-pad'
            />
          </ThemedCard>

          <ThemedCard className='mb-4'>
            <ThemedText>
              {
                JSON.stringify(form, null, 2)
              }
            </ThemedText>
          </ThemedCard>
          <ThemedCard className='mb-4'>
            <ThemedText>
              {
                JSON.stringify(form, null, 2)
              }
            </ThemedText>
          </ThemedCard>
          <ThemedCard className='mb-4'>
            <ThemedText>
              {
                JSON.stringify(form, null, 2)
              }
            </ThemedText>
          </ThemedCard>
          <ThemedCard className='mb-4'>
            <ThemedText>
              {
                JSON.stringify(form, null, 2)
              }
            </ThemedText>
          </ThemedCard>


          <ThemedCard 
          style={{
            marginBottom: 100
          }}
          >
            <ThemedTextInput
              onChangeText={(text) => setForm((prev) => ({ ...prev, phone: text }))}
              className='border border-gray-300 rounded-md p-2 mb-4'
              placeholder='Telefono'
              autoCapitalize='words'
              autoCorrect={false}
              keyboardType='phone-pad'
            />
          </ThemedCard>

        </ThemedView>
        
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
