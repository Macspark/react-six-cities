import Header from '../../components/header/header';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--not-found">
        <h1 style={{textAlign: 'center'}}>404 Page Not Found</h1>
      </main>
    </div>
  );
}

export default NotFoundScreen;
