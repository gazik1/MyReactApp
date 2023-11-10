import cl from './MyModal.module.css';
type IProps={
  children:JSX.Element
  visible:boolean
  setVisible:React.Dispatch<React.SetStateAction<boolean>>
}
export const MyModal = ({ children, visible, setVisible }:IProps) => {
  const rootClasses = [cl.myModal];
  if (visible) {
    rootClasses.push(cl.active);
  }

  return (
    <div
      className={rootClasses.join(' ')}
      onClick={() => {
        setVisible(false);
      }}>
      <div className={cl.myModalContent} onClick={(event)=>event.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
