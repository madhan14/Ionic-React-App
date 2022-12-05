import React from 'react';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonDatetime,
  IonBackButton,
  IonButtons,
  IonButton,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
  IonRange,
  IonItem,
  IonInput,
  IonRadioGroup,
  IonListHeader,
  IonRadio,
  IonCheckbox,
  IonSelect,
  IonSelectOption,
  IonToggle,
  IonText
} from '@ionic/react';

import { useForm, Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

const App: React.FunctionComponent = () => {
  const {
    handleSubmit, control, setValue, register, getValues, formState: { errors } } = useForm({
      defaultValues: {
        rangeInfo: 150,
        gender: 'MALE',
        email: '',
        privateToggle: false,
        privateCheck: true,
        radioGrp: 'biff',
        startDate: '2021-8'
      }
    });

    console.log(errors);
    console.log(getValues());

    /**
     *
     * @param data
     */
    const onSubmit = (data: any) => {
      alert(JSON.stringify(data, null, 2));
    };

  return (
    <IonApp>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton />
            </IonButtons>
            <IonTitle>React Hook Form v7</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* === ION DATE TIME === */}
            <IonItem>
              <IonLabel>PICK DATE</IonLabel>
              {/* <IonDatetime
                {...register('startDate', { required: 'must pick date' })}
              /> */}
            </IonItem>

            {/* === ION SELECT === */}
            <IonItem>
              <IonLabel>Gender</IonLabel>
              <Controller
                render={({ field }) => (
                  <IonSelect
                    placeholder="Select One"
                    value={field.value}
                    onIonChange={e => setValue('gender', e.detail.value)}
                  >
                    <IonSelectOption value="FEMALE">Female</IonSelectOption>
                    <IonSelectOption value="MALE">Male</IonSelectOption>
                  </IonSelect>
                )}
                control={control}
                name="gender"
                rules={{ required: 'This is a required field' }}
              />
            </IonItem>
            <ErrorMessage
              errors={errors}
              name="gender"
              as={<div style={{ color: 'red' }} />}
            />

            {/* === ION INPUT === */}
            <IonItem>
              <IonLabel>Email</IonLabel>
              <IonInput
                {...register('email', {
                  required: 'Email is a required field',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'invalid email address'
                  }
                })}
              />
            </IonItem>
            <ErrorMessage
              errors={errors}
              name="email"
              as={<div style={{ color: 'red' }} />}
            />

            {/* === ION RADIO === */}
            <IonItem>
              <IonText>
                <div style={{ padding: 8, paddingLeft: 0, fontWeight: 'bold' }}>
                  Radio Group
                </div>
                <div>
                  <IonRadioGroup
                    style={{ display: 'flex', width: '100%' }}
                    {...register('radioGrp', { required: true })}
                    defaultValue={getValues('radioGrp')}
                    onIonChange={e => setValue('radioGrp', e.detail.value)}
                  >
                    <IonItem
                      lines="none"
                      style={{
                        flexGrow: 2
                      }}
                    >
                      <IonLabel position="fixed">Biff</IonLabel>
                      <IonRadio slot="end" value="biff" />
                    </IonItem>

                    <IonItem style={{ flexGrow: 2 }} lines="none">
                      <IonLabel position="fixed">Griff</IonLabel>
                      <IonRadio slot="end" value="griff" />
                    </IonItem>
                    <IonItem style={{ flexGrow: 2 }} lines="none">
                      <IonLabel position="fixed">Buford</IonLabel>
                      <IonRadio slot="end" value="buford" />
                    </IonItem>
                  </IonRadioGroup>
                </div>
              </IonText>
            </IonItem>
            {errors.radioGrp && (
              <span className="error-msg">This field is required</span>
            )}

            {/* === ION CHECKBOX === */}
            <IonItem>
              <IonLabel>Private Check</IonLabel>
              <Controller
                name="privateCheck"
                control={control}
                render={({ field }) => {
                  return (
                    <IonCheckbox
                      checked={field.value}
                      onIonChange={e => {
                        setValue('privateCheck', e.detail.checked);
                      }}
                    />
                  );
                }}
              />
            </IonItem>

            {/* === ION TOGGLE === */}
            <IonItem>
              <IonLabel>Private Toggle</IonLabel>
              <Controller
                name="privateToggle"
                control={control}
                render={({ field }) => {
                  return (
                    <IonToggle
                      checked={field.value}
                      onIonChange={e => {
                        setValue('privateToggle', e.detail.checked);
                      }}
                    />
                  );
                }}
              />
            </IonItem>

            {/* === ION RANGE === */}
            <IonItem>
              <Controller
                render={({ field }) => (
                  <IonRange
                    min={-200}
                    max={200}
                    value={field.value}
                    color="secondary"
                    onIonChange={e => {
                      setValue('rangeInfo', e.detail.value as number);
                    }}
                  >
                    <IonLabel slot="start">-200</IonLabel>
                    <IonLabel slot="end">200</IonLabel>
                  </IonRange>
                )}
                control={control}
                name="rangeInfo"
                rules={{ required: 'Please Select A Value' }}
              />
            </IonItem>
            <ErrorMessage
              errors={errors}
              name="rangeInfo"
              as={<div style={{ color: 'red' }} />}
            />
            <div>
              <IonButton type="submit">submit</IonButton>
            </div>
          </form>
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export default App;
