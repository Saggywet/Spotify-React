import { Button } from "./components/ui/button";
import { SignedOut, SignedIn, SignInButton, UserButton } from "@clerk/clerk-react";

function App() {

  return (
<>
<header>
      <SignedOut>
        <SignInButton>
        <Button variant={"secondary"}>
        Get Started!  
        </Button>  
        </SignInButton> 
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
</>
  )
}

export default App
