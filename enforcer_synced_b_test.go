// Copyright 2023 The casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package casbin

import (
	"fmt"
	"math/rand"
	"testing"
)

func BenchmarkSyncedEnforcer_Enforcer(b *testing.B) {
	b.Run("Enforce", BenchmarkSyncedEnforcer_Enforce)
}

func BenchmarkSyncedEnforcer_Management_API(b *testing.B) {
	b.Run("HasPolicySmall", BenchmarkSyncedEnforcer_HasPolicySmall)
	b.Run("HasPolicyMedium", BenchmarkSyncedEnforcer_HasPolicyMedium)
	b.Run("HasPolicyLarge", BenchmarkSyncedEnforcer_HasPolicyLarge)
	b.Run("AddPolicySmall", BenchmarkSyncedEnforcer_AddPolicySmall)
	b.Run("AddPolicyMedium", BenchmarkSyncedEnforcer_AddPolicyMedium)
	b.Run("AddPolicyLarge", BenchmarkSyncedEnforcer_AddPolicyLarge)
	b.Run("RemovePolicySmall", BenchmarkSyncedEnforcer_RemovePolicySmall)
	b.Run("RemovePolicyMedium", BenchmarkSyncedEnforcer_RemovePolicyMedium)
	b.Run("RemovePolicyLarge", BenchmarkSyncedEnforcer_RemovePolicyLarge)
}

func BenchmarkSyncedEnforcer_Enforce(b *testing.B) {
	e, _ := NewSyncedEnforcer("examples/rbac_model.conf", "examples/rbac_policy.csv")
	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		b.RunParallel(func(pb *testing.PB) {
			for pb.Next() {
				_, _ = e.Enforce("alice", "data1", "read")
			}
		})
	}

}

func BenchmarkSyncedEnforcer_HasPolicySmall(b *testing.B) {
	e, _ := NewSyncedEnforcer("examples/basic_model.conf", false)

	// 100 roles, 10 resources.
	for i := 0; i < 100; i++ {
		_, _ = e.AddPolicy(fmt.Sprintf("user%d", i), fmt.Sprintf("data%d", i/10), "read")
	}

	b.ResetTimer()
	b.RunParallel(func(pb *testing.PB) {
		for pb.Next() {
			e.HasPolicy(fmt.Sprintf("user%d", rand.Intn(1000)), fmt.Sprintf("data%d", rand.Intn(1000)/10), "read")
		}
	})
}

func BenchmarkSyncedEnforcer_HasPolicyMedium(b *testing.B) {
	e, _ := NewSyncedEnforcer("examples/basic_model.conf", false)

	// 1000 roles, 100 resources.
	pPolicies := make([][]string, 0)
	for i := 0; i < 1000; i++ {
		pPolicies = append(pPolicies, []string{fmt.Sprintf("user%d", i), fmt.Sprintf("data%d", i/10), "read"})
	}
	_, err := e.AddPolicies(pPolicies)
	if err != nil {
		b.Fatal(err)
	}
	b.ResetTimer()

	b.ResetTimer()
	b.RunParallel(func(pb *testing.PB) {
		for pb.Next() {
			e.HasPolicy(fmt.Sprintf("user%d", rand.Intn(1000)), fmt.Sprintf("data%d", rand.Intn(1000)/10), "read")
		}
	})
}

func BenchmarkSyncedEnforcer_HasPolicyLarge(b *testing.B) {
	e, _ := NewSyncedEnforcer("examples/basic_model.conf", false)

	// 10000 roles, 1000 resources.
	pPolicies := make([][]string, 0)
	for i := 0; i < 10000; i++ {
		pPolicies = append(pPolicies, []string{fmt.Sprintf("user%d", i), fmt.Sprintf("data%d", i/10), "read"})
	}
	_, err := e.AddPolicies(pPolicies)
	if err != nil {
		b.Fatal(err)
	}

	b.ResetTimer()
	b.RunParallel(func(pb *testing.PB) {
		for pb.Next() {
			e.HasPolicy(fmt.Sprintf("user%d", rand.Intn(1000)), fmt.Sprintf("data%d", rand.Intn(1000)/10), "read")
		}
	})
}

func BenchmarkSyncedEnforcer_AddPolicySmall(b *testing.B) {
	e, _ := NewSyncedEnforcer("examples/basic_model.conf", false)

	// 100 roles, 10 resources.
	for i := 0; i < 100; i++ {
		_, _ = e.AddPolicy(fmt.Sprintf("user%d", i), fmt.Sprintf("data%d", i/10), "read")
	}

	b.ResetTimer()
	b.RunParallel(func(pb *testing.PB) {
		for pb.Next() {
			_, _ = e.AddPolicy(fmt.Sprintf("user%d", rand.Intn(100)+100), fmt.Sprintf("data%d", (rand.Intn(100)+100)/10), "read")
		}
	})
}

func BenchmarkSyncedEnforcer_AddPolicyMedium(b *testing.B) {
	e, _ := NewSyncedEnforcer("examples/basic_model.conf", false)

	// 1000 roles, 100 resources.
	pPolicies := make([][]string, 0)
	for i := 0; i < 1000; i++ {
		pPolicies = append(pPolicies, []string{fmt.Sprintf("user%d", i), fmt.Sprintf("data%d", i/10), "read"})
	}
	_, err := e.AddPolicies(pPolicies)
	if err != nil {
		b.Fatal(err)
	}
	b.ResetTimer()
	b.RunParallel(func(pb *testing.PB) {
		for pb.Next() {
			_, _ = e.AddPolicy(fmt.Sprintf("user%d", rand.Intn(1000)+1000), fmt.Sprintf("data%d", (rand.Intn(1000)+1000)/10), "read")
		}
	})
}

func BenchmarkSyncedEnforcer_AddPolicyLarge(b *testing.B) {
	e, _ := NewSyncedEnforcer("examples/basic_model.conf", false)

	// 10000 roles, 1000 resources.
	pPolicies := make([][]string, 0)
	for i := 0; i < 10000; i++ {
		pPolicies = append(pPolicies, []string{fmt.Sprintf("user%d", i), fmt.Sprintf("data%d", i/10), "read"})
	}
	_, err := e.AddPolicies(pPolicies)
	if err != nil {
		b.Fatal(err)
	}

	b.ResetTimer()
	b.RunParallel(func(pb *testing.PB) {
		for pb.Next() {
			_, _ = e.AddPolicy(fmt.Sprintf("user%d", rand.Intn(10000)+10000), fmt.Sprintf("data%d", (rand.Intn(10000)+10000)/10), "read")
		}
	})
}

func BenchmarkSyncedEnforcer_RemovePolicySmall(b *testing.B) {
	e, _ := NewSyncedEnforcer("examples/basic_model.conf", false)

	// 100 roles, 10 resources.
	for i := 0; i < 100; i++ {
		_, _ = e.AddPolicy(fmt.Sprintf("user%d", i), fmt.Sprintf("data%d", i/10), "read")
	}

	b.ResetTimer()
	b.RunParallel(func(pb *testing.PB) {
		for pb.Next() {
			_, _ = e.RemovePolicy(fmt.Sprintf("user%d", rand.Intn(100)), fmt.Sprintf("data%d", rand.Intn(100)/10), "read")
		}
	})
}

func BenchmarkSyncedEnforcer_RemovePolicyMedium(b *testing.B) {
	e, _ := NewSyncedEnforcer("examples/basic_model.conf", false)

	// 1000 roles, 100 resources.
	pPolicies := make([][]string, 0)
	for i := 0; i < 1000; i++ {
		pPolicies = append(pPolicies, []string{fmt.Sprintf("user%d", i), fmt.Sprintf("data%d", i/10), "read"})
	}
	_, err := e.AddPolicies(pPolicies)
	if err != nil {
		b.Fatal(err)
	}

	b.ResetTimer()
	b.RunParallel(func(pb *testing.PB) {
		for pb.Next() {
			_, _ = e.RemovePolicy(fmt.Sprintf("user%d", rand.Intn(1000)), fmt.Sprintf("data%d", rand.Intn(1000)/10), "read")
		}
	})
}

func BenchmarkSyncedEnforcer_RemovePolicyLarge(b *testing.B) {
	e, _ := NewSyncedEnforcer("examples/basic_model.conf", false)

	// 10000 roles, 1000 resources.
	pPolicies := make([][]string, 0)
	for i := 0; i < 10000; i++ {
		pPolicies = append(pPolicies, []string{fmt.Sprintf("user%d", i), fmt.Sprintf("data%d", i/10), "read"})
	}
	_, err := e.AddPolicies(pPolicies)
	if err != nil {
		b.Fatal(err)
	}

	b.ResetTimer()
	b.RunParallel(func(pb *testing.PB) {
		for pb.Next() {
			_, _ = e.RemovePolicy(fmt.Sprintf("user%d", rand.Intn(10000)), fmt.Sprintf("data%d", rand.Intn(10000)/10), "read")
		}
	})
}
