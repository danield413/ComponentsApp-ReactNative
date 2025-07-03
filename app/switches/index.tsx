import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedSwitch from '@/presentation/shared/ThemedSwitch';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';

const Switches = () => {

  const [state, setState] = useState({
    isActive: false,
    isDisabled: false,
    isLoading: false,
    isChecked: false,
    isIndeterminate: false,
  });
  



  return (
    <ThemedView className='px-5  flex-1' >
      <ThemedCard>
        {/* <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        /> */}

        <ThemedSwitch
          text='Hambriento'
          value={state.isActive}
          className='mb-2'
          onValueChange={() => {
            setState((prev) => ({
              ...prev,
              isActive: !prev.isActive,
            }));
          }}
        />
        <ThemedSwitch
          text='Contento'
          value={state.isLoading}
          className='mb-2'
          onValueChange={() => {
            setState((prev) => ({
              ...prev,
              isLoading: !prev.isLoading,
            }));
          }}
        />
      </ThemedCard>
    </ThemedView>
  );
};
export default Switches;
