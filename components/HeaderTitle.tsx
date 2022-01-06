const HeaderTitle: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <style jsx>
        {`
          div {
            display: flex;
            font-size: 35px;
            margin-top: 5px;
            padding: 10px 30px;
            border-bottom: 2px solid lime;
          }
        `}
      </style>
    </div>
  );
};

export default HeaderTitle;
