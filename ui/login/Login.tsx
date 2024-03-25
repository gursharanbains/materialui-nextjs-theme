"use client";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";

// export default function Login() {
//   const { data: session } = useSession();

//   if (session) {
//     return (
//       <>
//         Signed in as {session?.user?.email} <br />
//         <p>Welcome {session?.user?.name} </p>
//         <Avatar
//           alt={session?.user?.name || ""}
//           src={session?.user?.image || ""}
//         />
//         <button onClick={() => signOut()}>Sign out</button>
//       </>
//     );
//   }

//   return (
//     <>
//       Not signed in <br />
//       <button onClick={() => signIn()}>Sign in</button>
//     </>
//   );
// }

// TODO: REFACTOR THIS
export default function Login() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return (
      <Box
        sx={{
          width: "100%",
          height: "100vh",
        }}
      >
        <LinearProgress />
      </Box>
    );
  }

  if (status === "unauthenticated") {
    return (
      <>
        Log in <br />
        <Button
          variant="contained"
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
        >
          Sign in
        </Button>
      </>
    );
  }

  if (session) {
    router.push("/dashboard");
  }
}
