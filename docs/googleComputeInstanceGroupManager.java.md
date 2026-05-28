# `googleComputeInstanceGroupManager` Submodule <a name="`googleComputeInstanceGroupManager` Submodule" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeInstanceGroupManager <a name="GoogleComputeInstanceGroupManager" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager google_compute_instance_group_manager}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManager;

GoogleComputeInstanceGroupManager.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .baseInstanceName(java.lang.String)
    .name(java.lang.String)
    .version(IResolvable|java.util.List<GoogleComputeInstanceGroupManagerVersion>)
//  .allInstancesConfig(GoogleComputeInstanceGroupManagerAllInstancesConfig)
//  .autoHealingPolicies(GoogleComputeInstanceGroupManagerAutoHealingPolicies)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .instanceLifecyclePolicy(GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy)
//  .listManagedInstancesResults(java.lang.String)
//  .namedPort(IResolvable|java.util.List<GoogleComputeInstanceGroupManagerNamedPort>)
//  .params(GoogleComputeInstanceGroupManagerParams)
//  .project(java.lang.String)
//  .resourcePolicies(GoogleComputeInstanceGroupManagerResourcePolicies)
//  .standbyPolicy(GoogleComputeInstanceGroupManagerStandbyPolicy)
//  .statefulDisk(IResolvable|java.util.List<GoogleComputeInstanceGroupManagerStatefulDisk>)
//  .statefulExternalIp(IResolvable|java.util.List<GoogleComputeInstanceGroupManagerStatefulExternalIp>)
//  .statefulInternalIp(IResolvable|java.util.List<GoogleComputeInstanceGroupManagerStatefulInternalIp>)
//  .targetPools(java.util.List<java.lang.String>)
//  .targetSize(java.lang.Number)
//  .targetSizePolicy(IResolvable|java.util.List<GoogleComputeInstanceGroupManagerTargetSizePolicy>)
//  .targetStoppedSize(java.lang.Number)
//  .targetSuspendedSize(java.lang.Number)
//  .timeouts(GoogleComputeInstanceGroupManagerTimeouts)
//  .updatePolicy(GoogleComputeInstanceGroupManagerUpdatePolicy)
//  .waitForInstances(java.lang.Boolean|IResolvable)
//  .waitForInstancesStatus(java.lang.String)
//  .zone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.baseInstanceName">baseInstanceName</a></code> | <code>java.lang.String</code> | The base instance name to use for instances in this group. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the instance group manager. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.version">version</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion">GoogleComputeInstanceGroupManagerVersion</a>></code> | version block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.allInstancesConfig">allInstancesConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig">GoogleComputeInstanceGroupManagerAllInstancesConfig</a></code> | all_instances_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.autoHealingPolicies">autoHealingPolicies</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies">GoogleComputeInstanceGroupManagerAutoHealingPolicies</a></code> | auto_healing_policies block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional textual description of the instance group manager. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#id GoogleComputeInstanceGroupManager#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.instanceLifecyclePolicy">instanceLifecyclePolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy">GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy</a></code> | instance_lifecycle_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.listManagedInstancesResults">listManagedInstancesResults</a></code> | <code>java.lang.String</code> | Pagination behavior of the listManagedInstances API method for this managed instance group. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.namedPort">namedPort</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort">GoogleComputeInstanceGroupManagerNamedPort</a>></code> | named_port block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.params">params</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParams">GoogleComputeInstanceGroupManagerParams</a></code> | params block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.resourcePolicies">resourcePolicies</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePolicies">GoogleComputeInstanceGroupManagerResourcePolicies</a></code> | resource_policies block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.standbyPolicy">standbyPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy">GoogleComputeInstanceGroupManagerStandbyPolicy</a></code> | standby_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.statefulDisk">statefulDisk</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk">GoogleComputeInstanceGroupManagerStatefulDisk</a>></code> | stateful_disk block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.statefulExternalIp">statefulExternalIp</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp">GoogleComputeInstanceGroupManagerStatefulExternalIp</a>></code> | stateful_external_ip block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.statefulInternalIp">statefulInternalIp</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp">GoogleComputeInstanceGroupManagerStatefulInternalIp</a>></code> | stateful_internal_ip block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.targetPools">targetPools</a></code> | <code>java.util.List<java.lang.String></code> | The full URL of all target pools to which new instances in the group are added. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.targetSize">targetSize</a></code> | <code>java.lang.Number</code> | The target number of running instances for this managed instance group. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.targetSizePolicy">targetSizePolicy</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicy">GoogleComputeInstanceGroupManagerTargetSizePolicy</a>></code> | target_size_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.targetStoppedSize">targetStoppedSize</a></code> | <code>java.lang.Number</code> | The target number of stopped instances for this managed instance group. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.targetSuspendedSize">targetSuspendedSize</a></code> | <code>java.lang.Number</code> | The target number of suspended instances for this managed instance group. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts">GoogleComputeInstanceGroupManagerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.updatePolicy">updatePolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy">GoogleComputeInstanceGroupManagerUpdatePolicy</a></code> | update_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.waitForInstances">waitForInstances</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to wait for all instances to be created/updated before returning. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.waitForInstancesStatus">waitForInstancesStatus</a></code> | <code>java.lang.String</code> | When used with wait_for_instances specifies the status to wait for. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.zone">zone</a></code> | <code>java.lang.String</code> | The zone that instances in this group should be created in. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `baseInstanceName`<sup>Required</sup> <a name="baseInstanceName" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.baseInstanceName"></a>

- *Type:* java.lang.String

The base instance name to use for instances in this group.

The value must be a valid RFC1035 name. Supported characters are lowercase letters, numbers, and hyphens (-). Instances are named by appending a hyphen and a random four-character string to the base instance name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#base_instance_name GoogleComputeInstanceGroupManager#base_instance_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the instance group manager.

Must be 1-63 characters long and comply with RFC1035. Supported characters include lowercase letters, numbers, and hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#name GoogleComputeInstanceGroupManager#name}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.version"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion">GoogleComputeInstanceGroupManagerVersion</a>>

version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#version GoogleComputeInstanceGroupManager#version}

---

##### `allInstancesConfig`<sup>Optional</sup> <a name="allInstancesConfig" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.allInstancesConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig">GoogleComputeInstanceGroupManagerAllInstancesConfig</a>

all_instances_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#all_instances_config GoogleComputeInstanceGroupManager#all_instances_config}

---

##### `autoHealingPolicies`<sup>Optional</sup> <a name="autoHealingPolicies" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.autoHealingPolicies"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies">GoogleComputeInstanceGroupManagerAutoHealingPolicies</a>

auto_healing_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#auto_healing_policies GoogleComputeInstanceGroupManager#auto_healing_policies}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#deletion_policy GoogleComputeInstanceGroupManager#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional textual description of the instance group manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#description GoogleComputeInstanceGroupManager#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#id GoogleComputeInstanceGroupManager#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceLifecyclePolicy`<sup>Optional</sup> <a name="instanceLifecyclePolicy" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.instanceLifecyclePolicy"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy">GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy</a>

instance_lifecycle_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#instance_lifecycle_policy GoogleComputeInstanceGroupManager#instance_lifecycle_policy}

---

##### `listManagedInstancesResults`<sup>Optional</sup> <a name="listManagedInstancesResults" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.listManagedInstancesResults"></a>

- *Type:* java.lang.String

Pagination behavior of the listManagedInstances API method for this managed instance group.

Valid values are: "PAGELESS", "PAGINATED". If PAGELESS (default), Pagination is disabled for the group's listManagedInstances API method. maxResults and pageToken query parameters are ignored and all instances are returned in a single response. If PAGINATED, pagination is enabled, maxResults and pageToken query parameters are respected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#list_managed_instances_results GoogleComputeInstanceGroupManager#list_managed_instances_results}

---

##### `namedPort`<sup>Optional</sup> <a name="namedPort" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.namedPort"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort">GoogleComputeInstanceGroupManagerNamedPort</a>>

named_port block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#named_port GoogleComputeInstanceGroupManager#named_port}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.params"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParams">GoogleComputeInstanceGroupManagerParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#params GoogleComputeInstanceGroupManager#params}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#project GoogleComputeInstanceGroupManager#project}

---

##### `resourcePolicies`<sup>Optional</sup> <a name="resourcePolicies" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.resourcePolicies"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePolicies">GoogleComputeInstanceGroupManagerResourcePolicies</a>

resource_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#resource_policies GoogleComputeInstanceGroupManager#resource_policies}

---

##### `standbyPolicy`<sup>Optional</sup> <a name="standbyPolicy" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.standbyPolicy"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy">GoogleComputeInstanceGroupManagerStandbyPolicy</a>

standby_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#standby_policy GoogleComputeInstanceGroupManager#standby_policy}

---

##### `statefulDisk`<sup>Optional</sup> <a name="statefulDisk" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.statefulDisk"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk">GoogleComputeInstanceGroupManagerStatefulDisk</a>>

stateful_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#stateful_disk GoogleComputeInstanceGroupManager#stateful_disk}

---

##### `statefulExternalIp`<sup>Optional</sup> <a name="statefulExternalIp" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.statefulExternalIp"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp">GoogleComputeInstanceGroupManagerStatefulExternalIp</a>>

stateful_external_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#stateful_external_ip GoogleComputeInstanceGroupManager#stateful_external_ip}

---

##### `statefulInternalIp`<sup>Optional</sup> <a name="statefulInternalIp" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.statefulInternalIp"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp">GoogleComputeInstanceGroupManagerStatefulInternalIp</a>>

stateful_internal_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#stateful_internal_ip GoogleComputeInstanceGroupManager#stateful_internal_ip}

---

##### `targetPools`<sup>Optional</sup> <a name="targetPools" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.targetPools"></a>

- *Type:* java.util.List<java.lang.String>

The full URL of all target pools to which new instances in the group are added.

Updating the target pools attribute does not affect existing instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#target_pools GoogleComputeInstanceGroupManager#target_pools}

---

##### `targetSize`<sup>Optional</sup> <a name="targetSize" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.targetSize"></a>

- *Type:* java.lang.Number

The target number of running instances for this managed instance group.

This value should always be explicitly set unless this resource is attached to an autoscaler, in which case it should never be set. Defaults to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#target_size GoogleComputeInstanceGroupManager#target_size}

---

##### `targetSizePolicy`<sup>Optional</sup> <a name="targetSizePolicy" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.targetSizePolicy"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicy">GoogleComputeInstanceGroupManagerTargetSizePolicy</a>>

target_size_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#target_size_policy GoogleComputeInstanceGroupManager#target_size_policy}

---

##### `targetStoppedSize`<sup>Optional</sup> <a name="targetStoppedSize" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.targetStoppedSize"></a>

- *Type:* java.lang.Number

The target number of stopped instances for this managed instance group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#target_stopped_size GoogleComputeInstanceGroupManager#target_stopped_size}

---

##### `targetSuspendedSize`<sup>Optional</sup> <a name="targetSuspendedSize" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.targetSuspendedSize"></a>

- *Type:* java.lang.Number

The target number of suspended instances for this managed instance group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#target_suspended_size GoogleComputeInstanceGroupManager#target_suspended_size}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts">GoogleComputeInstanceGroupManagerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#timeouts GoogleComputeInstanceGroupManager#timeouts}

---

##### `updatePolicy`<sup>Optional</sup> <a name="updatePolicy" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.updatePolicy"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy">GoogleComputeInstanceGroupManagerUpdatePolicy</a>

update_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#update_policy GoogleComputeInstanceGroupManager#update_policy}

---

##### `waitForInstances`<sup>Optional</sup> <a name="waitForInstances" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.waitForInstances"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to wait for all instances to be created/updated before returning.

Note that if this is set to true and the operation does not succeed, Terraform will continue trying until it times out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#wait_for_instances GoogleComputeInstanceGroupManager#wait_for_instances}

---

##### `waitForInstancesStatus`<sup>Optional</sup> <a name="waitForInstancesStatus" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.waitForInstancesStatus"></a>

- *Type:* java.lang.String

When used with wait_for_instances specifies the status to wait for.

When STABLE is specified this resource will wait until the instances are stable before returning. When UPDATED is set, it will wait for the version target to be reached and any per instance configs to be effective and all instances configs to be effective as well as all instances to be stable before returning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#wait_for_instances_status GoogleComputeInstanceGroupManager#wait_for_instances_status}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.zone"></a>

- *Type:* java.lang.String

The zone that instances in this group should be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#zone GoogleComputeInstanceGroupManager#zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putAllInstancesConfig">putAllInstancesConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putAutoHealingPolicies">putAutoHealingPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putInstanceLifecyclePolicy">putInstanceLifecyclePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putNamedPort">putNamedPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putParams">putParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putResourcePolicies">putResourcePolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putStandbyPolicy">putStandbyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putStatefulDisk">putStatefulDisk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putStatefulExternalIp">putStatefulExternalIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putStatefulInternalIp">putStatefulInternalIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putTargetSizePolicy">putTargetSizePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putUpdatePolicy">putUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putVersion">putVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetAllInstancesConfig">resetAllInstancesConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetAutoHealingPolicies">resetAutoHealingPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetInstanceLifecyclePolicy">resetInstanceLifecyclePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetListManagedInstancesResults">resetListManagedInstancesResults</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetNamedPort">resetNamedPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetParams">resetParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetResourcePolicies">resetResourcePolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetStandbyPolicy">resetStandbyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetStatefulDisk">resetStatefulDisk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetStatefulExternalIp">resetStatefulExternalIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetStatefulInternalIp">resetStatefulInternalIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetTargetPools">resetTargetPools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetTargetSize">resetTargetSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetTargetSizePolicy">resetTargetSizePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetTargetStoppedSize">resetTargetStoppedSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetTargetSuspendedSize">resetTargetSuspendedSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetUpdatePolicy">resetUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetWaitForInstances">resetWaitForInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetWaitForInstancesStatus">resetWaitForInstancesStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAllInstancesConfig` <a name="putAllInstancesConfig" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putAllInstancesConfig"></a>

```java
public void putAllInstancesConfig(GoogleComputeInstanceGroupManagerAllInstancesConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putAllInstancesConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig">GoogleComputeInstanceGroupManagerAllInstancesConfig</a>

---

##### `putAutoHealingPolicies` <a name="putAutoHealingPolicies" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putAutoHealingPolicies"></a>

```java
public void putAutoHealingPolicies(GoogleComputeInstanceGroupManagerAutoHealingPolicies value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putAutoHealingPolicies.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies">GoogleComputeInstanceGroupManagerAutoHealingPolicies</a>

---

##### `putInstanceLifecyclePolicy` <a name="putInstanceLifecyclePolicy" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putInstanceLifecyclePolicy"></a>

```java
public void putInstanceLifecyclePolicy(GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putInstanceLifecyclePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy">GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy</a>

---

##### `putNamedPort` <a name="putNamedPort" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putNamedPort"></a>

```java
public void putNamedPort(IResolvable|java.util.List<GoogleComputeInstanceGroupManagerNamedPort> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putNamedPort.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort">GoogleComputeInstanceGroupManagerNamedPort</a>>

---

##### `putParams` <a name="putParams" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putParams"></a>

```java
public void putParams(GoogleComputeInstanceGroupManagerParams value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParams">GoogleComputeInstanceGroupManagerParams</a>

---

##### `putResourcePolicies` <a name="putResourcePolicies" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putResourcePolicies"></a>

```java
public void putResourcePolicies(GoogleComputeInstanceGroupManagerResourcePolicies value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putResourcePolicies.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePolicies">GoogleComputeInstanceGroupManagerResourcePolicies</a>

---

##### `putStandbyPolicy` <a name="putStandbyPolicy" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putStandbyPolicy"></a>

```java
public void putStandbyPolicy(GoogleComputeInstanceGroupManagerStandbyPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putStandbyPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy">GoogleComputeInstanceGroupManagerStandbyPolicy</a>

---

##### `putStatefulDisk` <a name="putStatefulDisk" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putStatefulDisk"></a>

```java
public void putStatefulDisk(IResolvable|java.util.List<GoogleComputeInstanceGroupManagerStatefulDisk> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putStatefulDisk.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk">GoogleComputeInstanceGroupManagerStatefulDisk</a>>

---

##### `putStatefulExternalIp` <a name="putStatefulExternalIp" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putStatefulExternalIp"></a>

```java
public void putStatefulExternalIp(IResolvable|java.util.List<GoogleComputeInstanceGroupManagerStatefulExternalIp> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putStatefulExternalIp.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp">GoogleComputeInstanceGroupManagerStatefulExternalIp</a>>

---

##### `putStatefulInternalIp` <a name="putStatefulInternalIp" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putStatefulInternalIp"></a>

```java
public void putStatefulInternalIp(IResolvable|java.util.List<GoogleComputeInstanceGroupManagerStatefulInternalIp> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putStatefulInternalIp.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp">GoogleComputeInstanceGroupManagerStatefulInternalIp</a>>

---

##### `putTargetSizePolicy` <a name="putTargetSizePolicy" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putTargetSizePolicy"></a>

```java
public void putTargetSizePolicy(IResolvable|java.util.List<GoogleComputeInstanceGroupManagerTargetSizePolicy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putTargetSizePolicy.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicy">GoogleComputeInstanceGroupManagerTargetSizePolicy</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putTimeouts"></a>

```java
public void putTimeouts(GoogleComputeInstanceGroupManagerTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts">GoogleComputeInstanceGroupManagerTimeouts</a>

---

##### `putUpdatePolicy` <a name="putUpdatePolicy" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putUpdatePolicy"></a>

```java
public void putUpdatePolicy(GoogleComputeInstanceGroupManagerUpdatePolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putUpdatePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy">GoogleComputeInstanceGroupManagerUpdatePolicy</a>

---

##### `putVersion` <a name="putVersion" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putVersion"></a>

```java
public void putVersion(IResolvable|java.util.List<GoogleComputeInstanceGroupManagerVersion> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putVersion.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion">GoogleComputeInstanceGroupManagerVersion</a>>

---

##### `resetAllInstancesConfig` <a name="resetAllInstancesConfig" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetAllInstancesConfig"></a>

```java
public void resetAllInstancesConfig()
```

##### `resetAutoHealingPolicies` <a name="resetAutoHealingPolicies" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetAutoHealingPolicies"></a>

```java
public void resetAutoHealingPolicies()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetId"></a>

```java
public void resetId()
```

##### `resetInstanceLifecyclePolicy` <a name="resetInstanceLifecyclePolicy" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetInstanceLifecyclePolicy"></a>

```java
public void resetInstanceLifecyclePolicy()
```

##### `resetListManagedInstancesResults` <a name="resetListManagedInstancesResults" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetListManagedInstancesResults"></a>

```java
public void resetListManagedInstancesResults()
```

##### `resetNamedPort` <a name="resetNamedPort" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetNamedPort"></a>

```java
public void resetNamedPort()
```

##### `resetParams` <a name="resetParams" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetParams"></a>

```java
public void resetParams()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetProject"></a>

```java
public void resetProject()
```

##### `resetResourcePolicies` <a name="resetResourcePolicies" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetResourcePolicies"></a>

```java
public void resetResourcePolicies()
```

##### `resetStandbyPolicy` <a name="resetStandbyPolicy" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetStandbyPolicy"></a>

```java
public void resetStandbyPolicy()
```

##### `resetStatefulDisk` <a name="resetStatefulDisk" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetStatefulDisk"></a>

```java
public void resetStatefulDisk()
```

##### `resetStatefulExternalIp` <a name="resetStatefulExternalIp" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetStatefulExternalIp"></a>

```java
public void resetStatefulExternalIp()
```

##### `resetStatefulInternalIp` <a name="resetStatefulInternalIp" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetStatefulInternalIp"></a>

```java
public void resetStatefulInternalIp()
```

##### `resetTargetPools` <a name="resetTargetPools" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetTargetPools"></a>

```java
public void resetTargetPools()
```

##### `resetTargetSize` <a name="resetTargetSize" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetTargetSize"></a>

```java
public void resetTargetSize()
```

##### `resetTargetSizePolicy` <a name="resetTargetSizePolicy" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetTargetSizePolicy"></a>

```java
public void resetTargetSizePolicy()
```

##### `resetTargetStoppedSize` <a name="resetTargetStoppedSize" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetTargetStoppedSize"></a>

```java
public void resetTargetStoppedSize()
```

##### `resetTargetSuspendedSize` <a name="resetTargetSuspendedSize" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetTargetSuspendedSize"></a>

```java
public void resetTargetSuspendedSize()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUpdatePolicy` <a name="resetUpdatePolicy" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetUpdatePolicy"></a>

```java
public void resetUpdatePolicy()
```

##### `resetWaitForInstances` <a name="resetWaitForInstances" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetWaitForInstances"></a>

```java
public void resetWaitForInstances()
```

##### `resetWaitForInstancesStatus` <a name="resetWaitForInstancesStatus" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetWaitForInstancesStatus"></a>

```java
public void resetWaitForInstancesStatus()
```

##### `resetZone` <a name="resetZone" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetZone"></a>

```java
public void resetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleComputeInstanceGroupManager resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManager;

GoogleComputeInstanceGroupManager.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManager;

GoogleComputeInstanceGroupManager.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManager;

GoogleComputeInstanceGroupManager.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManager;

GoogleComputeInstanceGroupManager.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleComputeInstanceGroupManager.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleComputeInstanceGroupManager resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleComputeInstanceGroupManager to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleComputeInstanceGroupManager that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeInstanceGroupManager to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.allInstancesConfig">allInstancesConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference">GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.autoHealingPolicies">autoHealingPolicies</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference">GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.fingerprint">fingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.instanceGroup">instanceGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.instanceGroupManagerId">instanceGroupManagerId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.instanceLifecyclePolicy">instanceLifecyclePolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference">GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.namedPort">namedPort</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList">GoogleComputeInstanceGroupManagerNamedPortList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.operation">operation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.params">params</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference">GoogleComputeInstanceGroupManagerParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.resourcePolicies">resourcePolicies</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference">GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.standbyPolicy">standbyPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference">GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.statefulDisk">statefulDisk</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList">GoogleComputeInstanceGroupManagerStatefulDiskList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.statefulExternalIp">statefulExternalIp</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList">GoogleComputeInstanceGroupManagerStatefulExternalIpList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.statefulInternalIp">statefulInternalIp</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList">GoogleComputeInstanceGroupManagerStatefulInternalIpList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.status">status</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList">GoogleComputeInstanceGroupManagerStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetSizePolicy">targetSizePolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyList">GoogleComputeInstanceGroupManagerTargetSizePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference">GoogleComputeInstanceGroupManagerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.updatePolicy">updatePolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference">GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.version">version</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList">GoogleComputeInstanceGroupManagerVersionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.allInstancesConfigInput">allInstancesConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig">GoogleComputeInstanceGroupManagerAllInstancesConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.autoHealingPoliciesInput">autoHealingPoliciesInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies">GoogleComputeInstanceGroupManagerAutoHealingPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.baseInstanceNameInput">baseInstanceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.instanceLifecyclePolicyInput">instanceLifecyclePolicyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy">GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.listManagedInstancesResultsInput">listManagedInstancesResultsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.namedPortInput">namedPortInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort">GoogleComputeInstanceGroupManagerNamedPort</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.paramsInput">paramsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParams">GoogleComputeInstanceGroupManagerParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.resourcePoliciesInput">resourcePoliciesInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePolicies">GoogleComputeInstanceGroupManagerResourcePolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.standbyPolicyInput">standbyPolicyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy">GoogleComputeInstanceGroupManagerStandbyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.statefulDiskInput">statefulDiskInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk">GoogleComputeInstanceGroupManagerStatefulDisk</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.statefulExternalIpInput">statefulExternalIpInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp">GoogleComputeInstanceGroupManagerStatefulExternalIp</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.statefulInternalIpInput">statefulInternalIpInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp">GoogleComputeInstanceGroupManagerStatefulInternalIp</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetPoolsInput">targetPoolsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetSizeInput">targetSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetSizePolicyInput">targetSizePolicyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicy">GoogleComputeInstanceGroupManagerTargetSizePolicy</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetStoppedSizeInput">targetStoppedSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetSuspendedSizeInput">targetSuspendedSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts">GoogleComputeInstanceGroupManagerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.updatePolicyInput">updatePolicyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy">GoogleComputeInstanceGroupManagerUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.versionInput">versionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion">GoogleComputeInstanceGroupManagerVersion</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.waitForInstancesInput">waitForInstancesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.waitForInstancesStatusInput">waitForInstancesStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.baseInstanceName">baseInstanceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.listManagedInstancesResults">listManagedInstancesResults</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetPools">targetPools</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetSize">targetSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetStoppedSize">targetStoppedSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetSuspendedSize">targetSuspendedSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.waitForInstances">waitForInstances</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.waitForInstancesStatus">waitForInstancesStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `allInstancesConfig`<sup>Required</sup> <a name="allInstancesConfig" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.allInstancesConfig"></a>

```java
public GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference getAllInstancesConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference">GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference</a>

---

##### `autoHealingPolicies`<sup>Required</sup> <a name="autoHealingPolicies" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.autoHealingPolicies"></a>

```java
public GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference getAutoHealingPolicies();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference">GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference</a>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.fingerprint"></a>

```java
public java.lang.String getFingerprint();
```

- *Type:* java.lang.String

---

##### `instanceGroup`<sup>Required</sup> <a name="instanceGroup" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.instanceGroup"></a>

```java
public java.lang.String getInstanceGroup();
```

- *Type:* java.lang.String

---

##### `instanceGroupManagerId`<sup>Required</sup> <a name="instanceGroupManagerId" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.instanceGroupManagerId"></a>

```java
public java.lang.Number getInstanceGroupManagerId();
```

- *Type:* java.lang.Number

---

##### `instanceLifecyclePolicy`<sup>Required</sup> <a name="instanceLifecyclePolicy" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.instanceLifecyclePolicy"></a>

```java
public GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference getInstanceLifecyclePolicy();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference">GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference</a>

---

##### `namedPort`<sup>Required</sup> <a name="namedPort" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.namedPort"></a>

```java
public GoogleComputeInstanceGroupManagerNamedPortList getNamedPort();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList">GoogleComputeInstanceGroupManagerNamedPortList</a>

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.operation"></a>

```java
public java.lang.String getOperation();
```

- *Type:* java.lang.String

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.params"></a>

```java
public GoogleComputeInstanceGroupManagerParamsOutputReference getParams();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference">GoogleComputeInstanceGroupManagerParamsOutputReference</a>

---

##### `resourcePolicies`<sup>Required</sup> <a name="resourcePolicies" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.resourcePolicies"></a>

```java
public GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference getResourcePolicies();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference">GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `standbyPolicy`<sup>Required</sup> <a name="standbyPolicy" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.standbyPolicy"></a>

```java
public GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference getStandbyPolicy();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference">GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference</a>

---

##### `statefulDisk`<sup>Required</sup> <a name="statefulDisk" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.statefulDisk"></a>

```java
public GoogleComputeInstanceGroupManagerStatefulDiskList getStatefulDisk();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList">GoogleComputeInstanceGroupManagerStatefulDiskList</a>

---

##### `statefulExternalIp`<sup>Required</sup> <a name="statefulExternalIp" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.statefulExternalIp"></a>

```java
public GoogleComputeInstanceGroupManagerStatefulExternalIpList getStatefulExternalIp();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList">GoogleComputeInstanceGroupManagerStatefulExternalIpList</a>

---

##### `statefulInternalIp`<sup>Required</sup> <a name="statefulInternalIp" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.statefulInternalIp"></a>

```java
public GoogleComputeInstanceGroupManagerStatefulInternalIpList getStatefulInternalIp();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList">GoogleComputeInstanceGroupManagerStatefulInternalIpList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.status"></a>

```java
public GoogleComputeInstanceGroupManagerStatusList getStatus();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList">GoogleComputeInstanceGroupManagerStatusList</a>

---

##### `targetSizePolicy`<sup>Required</sup> <a name="targetSizePolicy" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetSizePolicy"></a>

```java
public GoogleComputeInstanceGroupManagerTargetSizePolicyList getTargetSizePolicy();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyList">GoogleComputeInstanceGroupManagerTargetSizePolicyList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.timeouts"></a>

```java
public GoogleComputeInstanceGroupManagerTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference">GoogleComputeInstanceGroupManagerTimeoutsOutputReference</a>

---

##### `updatePolicy`<sup>Required</sup> <a name="updatePolicy" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.updatePolicy"></a>

```java
public GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference getUpdatePolicy();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference">GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.version"></a>

```java
public GoogleComputeInstanceGroupManagerVersionList getVersion();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList">GoogleComputeInstanceGroupManagerVersionList</a>

---

##### `allInstancesConfigInput`<sup>Optional</sup> <a name="allInstancesConfigInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.allInstancesConfigInput"></a>

```java
public GoogleComputeInstanceGroupManagerAllInstancesConfig getAllInstancesConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig">GoogleComputeInstanceGroupManagerAllInstancesConfig</a>

---

##### `autoHealingPoliciesInput`<sup>Optional</sup> <a name="autoHealingPoliciesInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.autoHealingPoliciesInput"></a>

```java
public GoogleComputeInstanceGroupManagerAutoHealingPolicies getAutoHealingPoliciesInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies">GoogleComputeInstanceGroupManagerAutoHealingPolicies</a>

---

##### `baseInstanceNameInput`<sup>Optional</sup> <a name="baseInstanceNameInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.baseInstanceNameInput"></a>

```java
public java.lang.String getBaseInstanceNameInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceLifecyclePolicyInput`<sup>Optional</sup> <a name="instanceLifecyclePolicyInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.instanceLifecyclePolicyInput"></a>

```java
public GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy getInstanceLifecyclePolicyInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy">GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy</a>

---

##### `listManagedInstancesResultsInput`<sup>Optional</sup> <a name="listManagedInstancesResultsInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.listManagedInstancesResultsInput"></a>

```java
public java.lang.String getListManagedInstancesResultsInput();
```

- *Type:* java.lang.String

---

##### `namedPortInput`<sup>Optional</sup> <a name="namedPortInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.namedPortInput"></a>

```java
public IResolvable|java.util.List<GoogleComputeInstanceGroupManagerNamedPort> getNamedPortInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort">GoogleComputeInstanceGroupManagerNamedPort</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `paramsInput`<sup>Optional</sup> <a name="paramsInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.paramsInput"></a>

```java
public GoogleComputeInstanceGroupManagerParams getParamsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParams">GoogleComputeInstanceGroupManagerParams</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `resourcePoliciesInput`<sup>Optional</sup> <a name="resourcePoliciesInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.resourcePoliciesInput"></a>

```java
public GoogleComputeInstanceGroupManagerResourcePolicies getResourcePoliciesInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePolicies">GoogleComputeInstanceGroupManagerResourcePolicies</a>

---

##### `standbyPolicyInput`<sup>Optional</sup> <a name="standbyPolicyInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.standbyPolicyInput"></a>

```java
public GoogleComputeInstanceGroupManagerStandbyPolicy getStandbyPolicyInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy">GoogleComputeInstanceGroupManagerStandbyPolicy</a>

---

##### `statefulDiskInput`<sup>Optional</sup> <a name="statefulDiskInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.statefulDiskInput"></a>

```java
public IResolvable|java.util.List<GoogleComputeInstanceGroupManagerStatefulDisk> getStatefulDiskInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk">GoogleComputeInstanceGroupManagerStatefulDisk</a>>

---

##### `statefulExternalIpInput`<sup>Optional</sup> <a name="statefulExternalIpInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.statefulExternalIpInput"></a>

```java
public IResolvable|java.util.List<GoogleComputeInstanceGroupManagerStatefulExternalIp> getStatefulExternalIpInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp">GoogleComputeInstanceGroupManagerStatefulExternalIp</a>>

---

##### `statefulInternalIpInput`<sup>Optional</sup> <a name="statefulInternalIpInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.statefulInternalIpInput"></a>

```java
public IResolvable|java.util.List<GoogleComputeInstanceGroupManagerStatefulInternalIp> getStatefulInternalIpInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp">GoogleComputeInstanceGroupManagerStatefulInternalIp</a>>

---

##### `targetPoolsInput`<sup>Optional</sup> <a name="targetPoolsInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetPoolsInput"></a>

```java
public java.util.List<java.lang.String> getTargetPoolsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetSizeInput`<sup>Optional</sup> <a name="targetSizeInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetSizeInput"></a>

```java
public java.lang.Number getTargetSizeInput();
```

- *Type:* java.lang.Number

---

##### `targetSizePolicyInput`<sup>Optional</sup> <a name="targetSizePolicyInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetSizePolicyInput"></a>

```java
public IResolvable|java.util.List<GoogleComputeInstanceGroupManagerTargetSizePolicy> getTargetSizePolicyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicy">GoogleComputeInstanceGroupManagerTargetSizePolicy</a>>

---

##### `targetStoppedSizeInput`<sup>Optional</sup> <a name="targetStoppedSizeInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetStoppedSizeInput"></a>

```java
public java.lang.Number getTargetStoppedSizeInput();
```

- *Type:* java.lang.Number

---

##### `targetSuspendedSizeInput`<sup>Optional</sup> <a name="targetSuspendedSizeInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetSuspendedSizeInput"></a>

```java
public java.lang.Number getTargetSuspendedSizeInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.timeoutsInput"></a>

```java
public IResolvable|GoogleComputeInstanceGroupManagerTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts">GoogleComputeInstanceGroupManagerTimeouts</a>

---

##### `updatePolicyInput`<sup>Optional</sup> <a name="updatePolicyInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.updatePolicyInput"></a>

```java
public GoogleComputeInstanceGroupManagerUpdatePolicy getUpdatePolicyInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy">GoogleComputeInstanceGroupManagerUpdatePolicy</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.versionInput"></a>

```java
public IResolvable|java.util.List<GoogleComputeInstanceGroupManagerVersion> getVersionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion">GoogleComputeInstanceGroupManagerVersion</a>>

---

##### `waitForInstancesInput`<sup>Optional</sup> <a name="waitForInstancesInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.waitForInstancesInput"></a>

```java
public java.lang.Boolean|IResolvable getWaitForInstancesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `waitForInstancesStatusInput`<sup>Optional</sup> <a name="waitForInstancesStatusInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.waitForInstancesStatusInput"></a>

```java
public java.lang.String getWaitForInstancesStatusInput();
```

- *Type:* java.lang.String

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `baseInstanceName`<sup>Required</sup> <a name="baseInstanceName" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.baseInstanceName"></a>

```java
public java.lang.String getBaseInstanceName();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `listManagedInstancesResults`<sup>Required</sup> <a name="listManagedInstancesResults" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.listManagedInstancesResults"></a>

```java
public java.lang.String getListManagedInstancesResults();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `targetPools`<sup>Required</sup> <a name="targetPools" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetPools"></a>

```java
public java.util.List<java.lang.String> getTargetPools();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetSize`<sup>Required</sup> <a name="targetSize" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetSize"></a>

```java
public java.lang.Number getTargetSize();
```

- *Type:* java.lang.Number

---

##### `targetStoppedSize`<sup>Required</sup> <a name="targetStoppedSize" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetStoppedSize"></a>

```java
public java.lang.Number getTargetStoppedSize();
```

- *Type:* java.lang.Number

---

##### `targetSuspendedSize`<sup>Required</sup> <a name="targetSuspendedSize" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetSuspendedSize"></a>

```java
public java.lang.Number getTargetSuspendedSize();
```

- *Type:* java.lang.Number

---

##### `waitForInstances`<sup>Required</sup> <a name="waitForInstances" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.waitForInstances"></a>

```java
public java.lang.Boolean|IResolvable getWaitForInstances();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `waitForInstancesStatus`<sup>Required</sup> <a name="waitForInstancesStatus" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.waitForInstancesStatus"></a>

```java
public java.lang.String getWaitForInstancesStatus();
```

- *Type:* java.lang.String

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeInstanceGroupManagerAllInstancesConfig <a name="GoogleComputeInstanceGroupManagerAllInstancesConfig" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManagerAllInstancesConfig;

GoogleComputeInstanceGroupManagerAllInstancesConfig.builder()
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The label key-value pairs that you want to patch onto the instance,. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The metadata key-value pairs that you want to patch onto the instance. |

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The label key-value pairs that you want to patch onto the instance,.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#labels GoogleComputeInstanceGroupManager#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The metadata key-value pairs that you want to patch onto the instance.

For more information, see Project and instance metadata,

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#metadata GoogleComputeInstanceGroupManager#metadata}

---

### GoogleComputeInstanceGroupManagerAutoHealingPolicies <a name="GoogleComputeInstanceGroupManagerAutoHealingPolicies" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManagerAutoHealingPolicies;

GoogleComputeInstanceGroupManagerAutoHealingPolicies.builder()
    .healthCheck(java.lang.String)
    .initialDelaySec(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies.property.healthCheck">healthCheck</a></code> | <code>java.lang.String</code> | The health check resource that signals autohealing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies.property.initialDelaySec">initialDelaySec</a></code> | <code>java.lang.Number</code> | The number of seconds that the managed instance group waits before it applies autohealing policies to new instances or recently recreated instances. |

---

##### `healthCheck`<sup>Required</sup> <a name="healthCheck" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies.property.healthCheck"></a>

```java
public java.lang.String getHealthCheck();
```

- *Type:* java.lang.String

The health check resource that signals autohealing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#health_check GoogleComputeInstanceGroupManager#health_check}

---

##### `initialDelaySec`<sup>Required</sup> <a name="initialDelaySec" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies.property.initialDelaySec"></a>

```java
public java.lang.Number getInitialDelaySec();
```

- *Type:* java.lang.Number

The number of seconds that the managed instance group waits before it applies autohealing policies to new instances or recently recreated instances.

Between 0 and 3600.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#initial_delay_sec GoogleComputeInstanceGroupManager#initial_delay_sec}

---

### GoogleComputeInstanceGroupManagerConfig <a name="GoogleComputeInstanceGroupManagerConfig" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManagerConfig;

GoogleComputeInstanceGroupManagerConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .baseInstanceName(java.lang.String)
    .name(java.lang.String)
    .version(IResolvable|java.util.List<GoogleComputeInstanceGroupManagerVersion>)
//  .allInstancesConfig(GoogleComputeInstanceGroupManagerAllInstancesConfig)
//  .autoHealingPolicies(GoogleComputeInstanceGroupManagerAutoHealingPolicies)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .instanceLifecyclePolicy(GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy)
//  .listManagedInstancesResults(java.lang.String)
//  .namedPort(IResolvable|java.util.List<GoogleComputeInstanceGroupManagerNamedPort>)
//  .params(GoogleComputeInstanceGroupManagerParams)
//  .project(java.lang.String)
//  .resourcePolicies(GoogleComputeInstanceGroupManagerResourcePolicies)
//  .standbyPolicy(GoogleComputeInstanceGroupManagerStandbyPolicy)
//  .statefulDisk(IResolvable|java.util.List<GoogleComputeInstanceGroupManagerStatefulDisk>)
//  .statefulExternalIp(IResolvable|java.util.List<GoogleComputeInstanceGroupManagerStatefulExternalIp>)
//  .statefulInternalIp(IResolvable|java.util.List<GoogleComputeInstanceGroupManagerStatefulInternalIp>)
//  .targetPools(java.util.List<java.lang.String>)
//  .targetSize(java.lang.Number)
//  .targetSizePolicy(IResolvable|java.util.List<GoogleComputeInstanceGroupManagerTargetSizePolicy>)
//  .targetStoppedSize(java.lang.Number)
//  .targetSuspendedSize(java.lang.Number)
//  .timeouts(GoogleComputeInstanceGroupManagerTimeouts)
//  .updatePolicy(GoogleComputeInstanceGroupManagerUpdatePolicy)
//  .waitForInstances(java.lang.Boolean|IResolvable)
//  .waitForInstancesStatus(java.lang.String)
//  .zone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.baseInstanceName">baseInstanceName</a></code> | <code>java.lang.String</code> | The base instance name to use for instances in this group. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the instance group manager. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.version">version</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion">GoogleComputeInstanceGroupManagerVersion</a>></code> | version block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.allInstancesConfig">allInstancesConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig">GoogleComputeInstanceGroupManagerAllInstancesConfig</a></code> | all_instances_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.autoHealingPolicies">autoHealingPolicies</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies">GoogleComputeInstanceGroupManagerAutoHealingPolicies</a></code> | auto_healing_policies block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional textual description of the instance group manager. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#id GoogleComputeInstanceGroupManager#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.instanceLifecyclePolicy">instanceLifecyclePolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy">GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy</a></code> | instance_lifecycle_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.listManagedInstancesResults">listManagedInstancesResults</a></code> | <code>java.lang.String</code> | Pagination behavior of the listManagedInstances API method for this managed instance group. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.namedPort">namedPort</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort">GoogleComputeInstanceGroupManagerNamedPort</a>></code> | named_port block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.params">params</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParams">GoogleComputeInstanceGroupManagerParams</a></code> | params block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.project">project</a></code> | <code>java.lang.String</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.resourcePolicies">resourcePolicies</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePolicies">GoogleComputeInstanceGroupManagerResourcePolicies</a></code> | resource_policies block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.standbyPolicy">standbyPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy">GoogleComputeInstanceGroupManagerStandbyPolicy</a></code> | standby_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.statefulDisk">statefulDisk</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk">GoogleComputeInstanceGroupManagerStatefulDisk</a>></code> | stateful_disk block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.statefulExternalIp">statefulExternalIp</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp">GoogleComputeInstanceGroupManagerStatefulExternalIp</a>></code> | stateful_external_ip block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.statefulInternalIp">statefulInternalIp</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp">GoogleComputeInstanceGroupManagerStatefulInternalIp</a>></code> | stateful_internal_ip block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.targetPools">targetPools</a></code> | <code>java.util.List<java.lang.String></code> | The full URL of all target pools to which new instances in the group are added. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.targetSize">targetSize</a></code> | <code>java.lang.Number</code> | The target number of running instances for this managed instance group. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.targetSizePolicy">targetSizePolicy</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicy">GoogleComputeInstanceGroupManagerTargetSizePolicy</a>></code> | target_size_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.targetStoppedSize">targetStoppedSize</a></code> | <code>java.lang.Number</code> | The target number of stopped instances for this managed instance group. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.targetSuspendedSize">targetSuspendedSize</a></code> | <code>java.lang.Number</code> | The target number of suspended instances for this managed instance group. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts">GoogleComputeInstanceGroupManagerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.updatePolicy">updatePolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy">GoogleComputeInstanceGroupManagerUpdatePolicy</a></code> | update_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.waitForInstances">waitForInstances</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to wait for all instances to be created/updated before returning. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.waitForInstancesStatus">waitForInstancesStatus</a></code> | <code>java.lang.String</code> | When used with wait_for_instances specifies the status to wait for. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.zone">zone</a></code> | <code>java.lang.String</code> | The zone that instances in this group should be created in. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `baseInstanceName`<sup>Required</sup> <a name="baseInstanceName" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.baseInstanceName"></a>

```java
public java.lang.String getBaseInstanceName();
```

- *Type:* java.lang.String

The base instance name to use for instances in this group.

The value must be a valid RFC1035 name. Supported characters are lowercase letters, numbers, and hyphens (-). Instances are named by appending a hyphen and a random four-character string to the base instance name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#base_instance_name GoogleComputeInstanceGroupManager#base_instance_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the instance group manager.

Must be 1-63 characters long and comply with RFC1035. Supported characters include lowercase letters, numbers, and hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#name GoogleComputeInstanceGroupManager#name}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.version"></a>

```java
public IResolvable|java.util.List<GoogleComputeInstanceGroupManagerVersion> getVersion();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion">GoogleComputeInstanceGroupManagerVersion</a>>

version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#version GoogleComputeInstanceGroupManager#version}

---

##### `allInstancesConfig`<sup>Optional</sup> <a name="allInstancesConfig" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.allInstancesConfig"></a>

```java
public GoogleComputeInstanceGroupManagerAllInstancesConfig getAllInstancesConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig">GoogleComputeInstanceGroupManagerAllInstancesConfig</a>

all_instances_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#all_instances_config GoogleComputeInstanceGroupManager#all_instances_config}

---

##### `autoHealingPolicies`<sup>Optional</sup> <a name="autoHealingPolicies" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.autoHealingPolicies"></a>

```java
public GoogleComputeInstanceGroupManagerAutoHealingPolicies getAutoHealingPolicies();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies">GoogleComputeInstanceGroupManagerAutoHealingPolicies</a>

auto_healing_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#auto_healing_policies GoogleComputeInstanceGroupManager#auto_healing_policies}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#deletion_policy GoogleComputeInstanceGroupManager#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional textual description of the instance group manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#description GoogleComputeInstanceGroupManager#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#id GoogleComputeInstanceGroupManager#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceLifecyclePolicy`<sup>Optional</sup> <a name="instanceLifecyclePolicy" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.instanceLifecyclePolicy"></a>

```java
public GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy getInstanceLifecyclePolicy();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy">GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy</a>

instance_lifecycle_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#instance_lifecycle_policy GoogleComputeInstanceGroupManager#instance_lifecycle_policy}

---

##### `listManagedInstancesResults`<sup>Optional</sup> <a name="listManagedInstancesResults" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.listManagedInstancesResults"></a>

```java
public java.lang.String getListManagedInstancesResults();
```

- *Type:* java.lang.String

Pagination behavior of the listManagedInstances API method for this managed instance group.

Valid values are: "PAGELESS", "PAGINATED". If PAGELESS (default), Pagination is disabled for the group's listManagedInstances API method. maxResults and pageToken query parameters are ignored and all instances are returned in a single response. If PAGINATED, pagination is enabled, maxResults and pageToken query parameters are respected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#list_managed_instances_results GoogleComputeInstanceGroupManager#list_managed_instances_results}

---

##### `namedPort`<sup>Optional</sup> <a name="namedPort" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.namedPort"></a>

```java
public IResolvable|java.util.List<GoogleComputeInstanceGroupManagerNamedPort> getNamedPort();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort">GoogleComputeInstanceGroupManagerNamedPort</a>>

named_port block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#named_port GoogleComputeInstanceGroupManager#named_port}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.params"></a>

```java
public GoogleComputeInstanceGroupManagerParams getParams();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParams">GoogleComputeInstanceGroupManagerParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#params GoogleComputeInstanceGroupManager#params}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#project GoogleComputeInstanceGroupManager#project}

---

##### `resourcePolicies`<sup>Optional</sup> <a name="resourcePolicies" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.resourcePolicies"></a>

```java
public GoogleComputeInstanceGroupManagerResourcePolicies getResourcePolicies();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePolicies">GoogleComputeInstanceGroupManagerResourcePolicies</a>

resource_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#resource_policies GoogleComputeInstanceGroupManager#resource_policies}

---

##### `standbyPolicy`<sup>Optional</sup> <a name="standbyPolicy" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.standbyPolicy"></a>

```java
public GoogleComputeInstanceGroupManagerStandbyPolicy getStandbyPolicy();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy">GoogleComputeInstanceGroupManagerStandbyPolicy</a>

standby_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#standby_policy GoogleComputeInstanceGroupManager#standby_policy}

---

##### `statefulDisk`<sup>Optional</sup> <a name="statefulDisk" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.statefulDisk"></a>

```java
public IResolvable|java.util.List<GoogleComputeInstanceGroupManagerStatefulDisk> getStatefulDisk();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk">GoogleComputeInstanceGroupManagerStatefulDisk</a>>

stateful_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#stateful_disk GoogleComputeInstanceGroupManager#stateful_disk}

---

##### `statefulExternalIp`<sup>Optional</sup> <a name="statefulExternalIp" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.statefulExternalIp"></a>

```java
public IResolvable|java.util.List<GoogleComputeInstanceGroupManagerStatefulExternalIp> getStatefulExternalIp();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp">GoogleComputeInstanceGroupManagerStatefulExternalIp</a>>

stateful_external_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#stateful_external_ip GoogleComputeInstanceGroupManager#stateful_external_ip}

---

##### `statefulInternalIp`<sup>Optional</sup> <a name="statefulInternalIp" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.statefulInternalIp"></a>

```java
public IResolvable|java.util.List<GoogleComputeInstanceGroupManagerStatefulInternalIp> getStatefulInternalIp();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp">GoogleComputeInstanceGroupManagerStatefulInternalIp</a>>

stateful_internal_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#stateful_internal_ip GoogleComputeInstanceGroupManager#stateful_internal_ip}

---

##### `targetPools`<sup>Optional</sup> <a name="targetPools" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.targetPools"></a>

```java
public java.util.List<java.lang.String> getTargetPools();
```

- *Type:* java.util.List<java.lang.String>

The full URL of all target pools to which new instances in the group are added.

Updating the target pools attribute does not affect existing instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#target_pools GoogleComputeInstanceGroupManager#target_pools}

---

##### `targetSize`<sup>Optional</sup> <a name="targetSize" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.targetSize"></a>

```java
public java.lang.Number getTargetSize();
```

- *Type:* java.lang.Number

The target number of running instances for this managed instance group.

This value should always be explicitly set unless this resource is attached to an autoscaler, in which case it should never be set. Defaults to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#target_size GoogleComputeInstanceGroupManager#target_size}

---

##### `targetSizePolicy`<sup>Optional</sup> <a name="targetSizePolicy" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.targetSizePolicy"></a>

```java
public IResolvable|java.util.List<GoogleComputeInstanceGroupManagerTargetSizePolicy> getTargetSizePolicy();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicy">GoogleComputeInstanceGroupManagerTargetSizePolicy</a>>

target_size_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#target_size_policy GoogleComputeInstanceGroupManager#target_size_policy}

---

##### `targetStoppedSize`<sup>Optional</sup> <a name="targetStoppedSize" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.targetStoppedSize"></a>

```java
public java.lang.Number getTargetStoppedSize();
```

- *Type:* java.lang.Number

The target number of stopped instances for this managed instance group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#target_stopped_size GoogleComputeInstanceGroupManager#target_stopped_size}

---

##### `targetSuspendedSize`<sup>Optional</sup> <a name="targetSuspendedSize" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.targetSuspendedSize"></a>

```java
public java.lang.Number getTargetSuspendedSize();
```

- *Type:* java.lang.Number

The target number of suspended instances for this managed instance group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#target_suspended_size GoogleComputeInstanceGroupManager#target_suspended_size}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.timeouts"></a>

```java
public GoogleComputeInstanceGroupManagerTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts">GoogleComputeInstanceGroupManagerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#timeouts GoogleComputeInstanceGroupManager#timeouts}

---

##### `updatePolicy`<sup>Optional</sup> <a name="updatePolicy" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.updatePolicy"></a>

```java
public GoogleComputeInstanceGroupManagerUpdatePolicy getUpdatePolicy();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy">GoogleComputeInstanceGroupManagerUpdatePolicy</a>

update_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#update_policy GoogleComputeInstanceGroupManager#update_policy}

---

##### `waitForInstances`<sup>Optional</sup> <a name="waitForInstances" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.waitForInstances"></a>

```java
public java.lang.Boolean|IResolvable getWaitForInstances();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to wait for all instances to be created/updated before returning.

Note that if this is set to true and the operation does not succeed, Terraform will continue trying until it times out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#wait_for_instances GoogleComputeInstanceGroupManager#wait_for_instances}

---

##### `waitForInstancesStatus`<sup>Optional</sup> <a name="waitForInstancesStatus" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.waitForInstancesStatus"></a>

```java
public java.lang.String getWaitForInstancesStatus();
```

- *Type:* java.lang.String

When used with wait_for_instances specifies the status to wait for.

When STABLE is specified this resource will wait until the instances are stable before returning. When UPDATED is set, it will wait for the version target to be reached and any per instance configs to be effective and all instances configs to be effective as well as all instances to be stable before returning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#wait_for_instances_status GoogleComputeInstanceGroupManager#wait_for_instances_status}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

The zone that instances in this group should be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#zone GoogleComputeInstanceGroupManager#zone}

---

### GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy <a name="GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy;

GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy.builder()
//  .defaultActionOnFailure(java.lang.String)
//  .forceUpdateOnRepair(java.lang.String)
//  .onFailedHealthCheck(java.lang.String)
//  .onRepair(GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepair)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy.property.defaultActionOnFailure">defaultActionOnFailure</a></code> | <code>java.lang.String</code> | Specifies the action that a MIG performs on a failed VM. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy.property.forceUpdateOnRepair">forceUpdateOnRepair</a></code> | <code>java.lang.String</code> | Specifies whether to apply the group's latest configuration when repairing a VM. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy.property.onFailedHealthCheck">onFailedHealthCheck</a></code> | <code>java.lang.String</code> | Specifies the action that a MIG performs on an unhealthy VM. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy.property.onRepair">onRepair</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepair">GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepair</a></code> | on_repair block. |

---

##### `defaultActionOnFailure`<sup>Optional</sup> <a name="defaultActionOnFailure" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy.property.defaultActionOnFailure"></a>

```java
public java.lang.String getDefaultActionOnFailure();
```

- *Type:* java.lang.String

Specifies the action that a MIG performs on a failed VM.

If the value of the "on_failed_health_check" field is DEFAULT_ACTION, then the same action also applies to the VMs on which your application fails a health check. Valid values are: REPAIR, DO_NOTHING. If REPAIR (default), then MIG automatically repairs a failed VM by recreating it. For more information, see about repairing VMs in a MIG. If DO_NOTHING, then MIG does not repair a failed VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#default_action_on_failure GoogleComputeInstanceGroupManager#default_action_on_failure}

---

##### `forceUpdateOnRepair`<sup>Optional</sup> <a name="forceUpdateOnRepair" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy.property.forceUpdateOnRepair"></a>

```java
public java.lang.String getForceUpdateOnRepair();
```

- *Type:* java.lang.String

Specifies whether to apply the group's latest configuration when repairing a VM.

Valid options are: YES, NO. If YES and you updated the group's instance template or per-instance configurations after the VM was created, then these changes are applied when VM is repaired. If NO (default), then updates are applied in accordance with the group's update policy type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#force_update_on_repair GoogleComputeInstanceGroupManager#force_update_on_repair}

---

##### `onFailedHealthCheck`<sup>Optional</sup> <a name="onFailedHealthCheck" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy.property.onFailedHealthCheck"></a>

```java
public java.lang.String getOnFailedHealthCheck();
```

- *Type:* java.lang.String

Specifies the action that a MIG performs on an unhealthy VM.

A VM is marked as unhealthy when the application running on that VM fails a health check. Valid values are: DEFAULT_ACTION, DO_NOTHING, REPAIR. If DEFAULT_ACTION (default), then MIG uses the same action configured for the  "default_action_on_failure" field. If DO_NOTHING, then MIG does not repair unhealthy VM. If REPAIR, then MIG automatically repairs an unhealthy VM by recreating it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#on_failed_health_check GoogleComputeInstanceGroupManager#on_failed_health_check}

---

##### `onRepair`<sup>Optional</sup> <a name="onRepair" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy.property.onRepair"></a>

```java
public GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepair getOnRepair();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepair">GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepair</a>

on_repair block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#on_repair GoogleComputeInstanceGroupManager#on_repair}

---

### GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepair <a name="GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepair" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepair"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepair.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepair;

GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepair.builder()
//  .allowChangingZone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepair.property.allowChangingZone">allowChangingZone</a></code> | <code>java.lang.String</code> | Specifies whether the MIG can change a VM's zone during a repair. |

---

##### `allowChangingZone`<sup>Optional</sup> <a name="allowChangingZone" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepair.property.allowChangingZone"></a>

```java
public java.lang.String getAllowChangingZone();
```

- *Type:* java.lang.String

Specifies whether the MIG can change a VM's zone during a repair.

If "YES", MIG can select a different zone for the VM during a repair. Else if "NO", MIG cannot change a VM's zone during a repair. The default value of allow_changing_zone is "NO".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#allow_changing_zone GoogleComputeInstanceGroupManager#allow_changing_zone}

---

### GoogleComputeInstanceGroupManagerNamedPort <a name="GoogleComputeInstanceGroupManagerNamedPort" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManagerNamedPort;

GoogleComputeInstanceGroupManagerNamedPort.builder()
    .name(java.lang.String)
    .port(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort.property.name">name</a></code> | <code>java.lang.String</code> | The name of the port. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort.property.port">port</a></code> | <code>java.lang.Number</code> | The port number. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#name GoogleComputeInstanceGroupManager#name}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The port number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#port GoogleComputeInstanceGroupManager#port}

---

### GoogleComputeInstanceGroupManagerParams <a name="GoogleComputeInstanceGroupManagerParams" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParams.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManagerParams;

GoogleComputeInstanceGroupManagerParams.builder()
//  .resourceManagerTags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParams.property.resourceManagerTags">resourceManagerTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Resource manager tags to bind to the managed instance group. |

---

##### `resourceManagerTags`<sup>Optional</sup> <a name="resourceManagerTags" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParams.property.resourceManagerTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceManagerTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Resource manager tags to bind to the managed instance group.

The tags are key-value pairs. Keys must be in the format tagKeys/123 and values in the format tagValues/456.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#resource_manager_tags GoogleComputeInstanceGroupManager#resource_manager_tags}

---

### GoogleComputeInstanceGroupManagerResourcePolicies <a name="GoogleComputeInstanceGroupManagerResourcePolicies" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePolicies.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManagerResourcePolicies;

GoogleComputeInstanceGroupManagerResourcePolicies.builder()
//  .workloadPolicy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePolicies.property.workloadPolicy">workloadPolicy</a></code> | <code>java.lang.String</code> | The URL of the workload policy that is specified for this managed instance group. |

---

##### `workloadPolicy`<sup>Optional</sup> <a name="workloadPolicy" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePolicies.property.workloadPolicy"></a>

```java
public java.lang.String getWorkloadPolicy();
```

- *Type:* java.lang.String

The URL of the workload policy that is specified for this managed instance group.

It can be a full or partial URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#workload_policy GoogleComputeInstanceGroupManager#workload_policy}

---

### GoogleComputeInstanceGroupManagerStandbyPolicy <a name="GoogleComputeInstanceGroupManagerStandbyPolicy" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManagerStandbyPolicy;

GoogleComputeInstanceGroupManagerStandbyPolicy.builder()
//  .initialDelaySec(java.lang.Number)
//  .mode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy.property.initialDelaySec">initialDelaySec</a></code> | <code>java.lang.Number</code> | Specifies the number of seconds that the MIG should wait to suspend or stop a VM after that VM was created. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy.property.mode">mode</a></code> | <code>java.lang.String</code> | Defines how a MIG resumes or starts VMs from a standby pool when the group scales out. |

---

##### `initialDelaySec`<sup>Optional</sup> <a name="initialDelaySec" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy.property.initialDelaySec"></a>

```java
public java.lang.Number getInitialDelaySec();
```

- *Type:* java.lang.Number

Specifies the number of seconds that the MIG should wait to suspend or stop a VM after that VM was created.

The initial delay gives the initialization script the time to prepare your VM for a quick scale out. The value of initial delay must be between 0 and 3600 seconds. The default value is 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#initial_delay_sec GoogleComputeInstanceGroupManager#initial_delay_sec}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Defines how a MIG resumes or starts VMs from a standby pool when the group scales out.

The default mode is "MANUAL".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#mode GoogleComputeInstanceGroupManager#mode}

---

### GoogleComputeInstanceGroupManagerStatefulDisk <a name="GoogleComputeInstanceGroupManagerStatefulDisk" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManagerStatefulDisk;

GoogleComputeInstanceGroupManagerStatefulDisk.builder()
    .deviceName(java.lang.String)
//  .deleteRule(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | The device name of the disk to be attached. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk.property.deleteRule">deleteRule</a></code> | <code>java.lang.String</code> | A value that prescribes what should happen to the stateful disk when the VM instance is deleted. |

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

The device name of the disk to be attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#device_name GoogleComputeInstanceGroupManager#device_name}

---

##### `deleteRule`<sup>Optional</sup> <a name="deleteRule" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk.property.deleteRule"></a>

```java
public java.lang.String getDeleteRule();
```

- *Type:* java.lang.String

A value that prescribes what should happen to the stateful disk when the VM instance is deleted.

The available options are NEVER and ON_PERMANENT_INSTANCE_DELETION. NEVER - detach the disk when the VM is deleted, but do not delete the disk. ON_PERMANENT_INSTANCE_DELETION will delete the stateful disk when the VM is permanently deleted from the instance group. The default is NEVER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#delete_rule GoogleComputeInstanceGroupManager#delete_rule}

---

### GoogleComputeInstanceGroupManagerStatefulExternalIp <a name="GoogleComputeInstanceGroupManagerStatefulExternalIp" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManagerStatefulExternalIp;

GoogleComputeInstanceGroupManagerStatefulExternalIp.builder()
//  .deleteRule(java.lang.String)
//  .interfaceName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp.property.deleteRule">deleteRule</a></code> | <code>java.lang.String</code> | A value that prescribes what should happen to an associated static Address resource when a VM instance is permanently deleted. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp.property.interfaceName">interfaceName</a></code> | <code>java.lang.String</code> | The network interface name. |

---

##### `deleteRule`<sup>Optional</sup> <a name="deleteRule" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp.property.deleteRule"></a>

```java
public java.lang.String getDeleteRule();
```

- *Type:* java.lang.String

A value that prescribes what should happen to an associated static Address resource when a VM instance is permanently deleted.

The available options are NEVER and ON_PERMANENT_INSTANCE_DELETION. NEVER - detach the IP when the VM is deleted, but do not delete the address resource. ON_PERMANENT_INSTANCE_DELETION will delete the stateful address when the VM is permanently deleted from the instance group. The default is NEVER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#delete_rule GoogleComputeInstanceGroupManager#delete_rule}

---

##### `interfaceName`<sup>Optional</sup> <a name="interfaceName" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp.property.interfaceName"></a>

```java
public java.lang.String getInterfaceName();
```

- *Type:* java.lang.String

The network interface name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#interface_name GoogleComputeInstanceGroupManager#interface_name}

---

### GoogleComputeInstanceGroupManagerStatefulInternalIp <a name="GoogleComputeInstanceGroupManagerStatefulInternalIp" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManagerStatefulInternalIp;

GoogleComputeInstanceGroupManagerStatefulInternalIp.builder()
//  .deleteRule(java.lang.String)
//  .interfaceName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp.property.deleteRule">deleteRule</a></code> | <code>java.lang.String</code> | A value that prescribes what should happen to an associated static Address resource when a VM instance is permanently deleted. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp.property.interfaceName">interfaceName</a></code> | <code>java.lang.String</code> | The network interface name. |

---

##### `deleteRule`<sup>Optional</sup> <a name="deleteRule" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp.property.deleteRule"></a>

```java
public java.lang.String getDeleteRule();
```

- *Type:* java.lang.String

A value that prescribes what should happen to an associated static Address resource when a VM instance is permanently deleted.

The available options are NEVER and ON_PERMANENT_INSTANCE_DELETION. NEVER - detach the IP when the VM is deleted, but do not delete the address resource. ON_PERMANENT_INSTANCE_DELETION will delete the stateful address when the VM is permanently deleted from the instance group. The default is NEVER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#delete_rule GoogleComputeInstanceGroupManager#delete_rule}

---

##### `interfaceName`<sup>Optional</sup> <a name="interfaceName" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp.property.interfaceName"></a>

```java
public java.lang.String getInterfaceName();
```

- *Type:* java.lang.String

The network interface name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#interface_name GoogleComputeInstanceGroupManager#interface_name}

---

### GoogleComputeInstanceGroupManagerStatus <a name="GoogleComputeInstanceGroupManagerStatus" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatus.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManagerStatus;

GoogleComputeInstanceGroupManagerStatus.builder()
    .build();
```


### GoogleComputeInstanceGroupManagerStatusAllInstancesConfig <a name="GoogleComputeInstanceGroupManagerStatusAllInstancesConfig" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfig;

GoogleComputeInstanceGroupManagerStatusAllInstancesConfig.builder()
    .build();
```


### GoogleComputeInstanceGroupManagerStatusStateful <a name="GoogleComputeInstanceGroupManagerStatusStateful" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStateful"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStateful.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManagerStatusStateful;

GoogleComputeInstanceGroupManagerStatusStateful.builder()
    .build();
```


### GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs <a name="GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs;

GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs.builder()
    .build();
```


### GoogleComputeInstanceGroupManagerStatusVersionTarget <a name="GoogleComputeInstanceGroupManagerStatusVersionTarget" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTarget.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManagerStatusVersionTarget;

GoogleComputeInstanceGroupManagerStatusVersionTarget.builder()
    .build();
```


### GoogleComputeInstanceGroupManagerTargetSizePolicy <a name="GoogleComputeInstanceGroupManagerTargetSizePolicy" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicy.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManagerTargetSizePolicy;

GoogleComputeInstanceGroupManagerTargetSizePolicy.builder()
    .mode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicy.property.mode">mode</a></code> | <code>java.lang.String</code> | The mode of target size policy based on which the MIG creates its VMs individually or all at once. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicy.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

The mode of target size policy based on which the MIG creates its VMs individually or all at once.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#mode GoogleComputeInstanceGroupManager#mode}

---

### GoogleComputeInstanceGroupManagerTimeouts <a name="GoogleComputeInstanceGroupManagerTimeouts" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManagerTimeouts;

GoogleComputeInstanceGroupManagerTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#create GoogleComputeInstanceGroupManager#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#delete GoogleComputeInstanceGroupManager#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#update GoogleComputeInstanceGroupManager#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#create GoogleComputeInstanceGroupManager#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#delete GoogleComputeInstanceGroupManager#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#update GoogleComputeInstanceGroupManager#update}.

---

### GoogleComputeInstanceGroupManagerUpdatePolicy <a name="GoogleComputeInstanceGroupManagerUpdatePolicy" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManagerUpdatePolicy;

GoogleComputeInstanceGroupManagerUpdatePolicy.builder()
    .minimalAction(java.lang.String)
    .type(java.lang.String)
//  .maxSurgeFixed(java.lang.Number)
//  .maxSurgePercent(java.lang.Number)
//  .maxUnavailableFixed(java.lang.Number)
//  .maxUnavailablePercent(java.lang.Number)
//  .minReadySec(java.lang.Number)
//  .mostDisruptiveAllowedAction(java.lang.String)
//  .replacementMethod(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.minimalAction">minimalAction</a></code> | <code>java.lang.String</code> | Minimal action to be taken on an instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.type">type</a></code> | <code>java.lang.String</code> | The type of update process. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.maxSurgeFixed">maxSurgeFixed</a></code> | <code>java.lang.Number</code> | Specifies a fixed number of VM instances. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.maxSurgePercent">maxSurgePercent</a></code> | <code>java.lang.Number</code> | Specifies a percentage of instances between 0 to 100%, inclusive. For example, specify 80 for 80%. Conflicts with max_surge_fixed. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.maxUnavailableFixed">maxUnavailableFixed</a></code> | <code>java.lang.Number</code> | Specifies a fixed number of VM instances. This must be a positive integer. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.maxUnavailablePercent">maxUnavailablePercent</a></code> | <code>java.lang.Number</code> | Specifies a percentage of instances between 0 to 100%, inclusive. For example, specify 80 for 80%. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.minReadySec">minReadySec</a></code> | <code>java.lang.Number</code> | Minimum number of seconds to wait for after a newly created instance becomes available. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.mostDisruptiveAllowedAction">mostDisruptiveAllowedAction</a></code> | <code>java.lang.String</code> | Most disruptive action that is allowed to be taken on an instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.replacementMethod">replacementMethod</a></code> | <code>java.lang.String</code> | The instance replacement method for managed instance groups. |

---

##### `minimalAction`<sup>Required</sup> <a name="minimalAction" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.minimalAction"></a>

```java
public java.lang.String getMinimalAction();
```

- *Type:* java.lang.String

Minimal action to be taken on an instance.

You can specify either NONE to forbid any actions, REFRESH to update without stopping instances, RESTART to restart existing instances or REPLACE to delete and create new instances from the target template. If you specify a REFRESH, the Updater will attempt to perform that action only. However, if the Updater determines that the minimal action you specify is not enough to perform the update, it might perform a more disruptive action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#minimal_action GoogleComputeInstanceGroupManager#minimal_action}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of update process.

You can specify either PROACTIVE so that the instance group manager proactively executes actions in order to bring instances to their target versions or OPPORTUNISTIC so that no action is proactively executed but the update will be performed as part of other actions (for example, resizes or recreateInstances calls).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#type GoogleComputeInstanceGroupManager#type}

---

##### `maxSurgeFixed`<sup>Optional</sup> <a name="maxSurgeFixed" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.maxSurgeFixed"></a>

```java
public java.lang.Number getMaxSurgeFixed();
```

- *Type:* java.lang.Number

Specifies a fixed number of VM instances.

This must be a positive integer. Conflicts with max_surge_percent. Both cannot be 0

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#max_surge_fixed GoogleComputeInstanceGroupManager#max_surge_fixed}

---

##### `maxSurgePercent`<sup>Optional</sup> <a name="maxSurgePercent" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.maxSurgePercent"></a>

```java
public java.lang.Number getMaxSurgePercent();
```

- *Type:* java.lang.Number

Specifies a percentage of instances between 0 to 100%, inclusive. For example, specify 80 for 80%. Conflicts with max_surge_fixed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#max_surge_percent GoogleComputeInstanceGroupManager#max_surge_percent}

---

##### `maxUnavailableFixed`<sup>Optional</sup> <a name="maxUnavailableFixed" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.maxUnavailableFixed"></a>

```java
public java.lang.Number getMaxUnavailableFixed();
```

- *Type:* java.lang.Number

Specifies a fixed number of VM instances. This must be a positive integer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#max_unavailable_fixed GoogleComputeInstanceGroupManager#max_unavailable_fixed}

---

##### `maxUnavailablePercent`<sup>Optional</sup> <a name="maxUnavailablePercent" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.maxUnavailablePercent"></a>

```java
public java.lang.Number getMaxUnavailablePercent();
```

- *Type:* java.lang.Number

Specifies a percentage of instances between 0 to 100%, inclusive. For example, specify 80 for 80%.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#max_unavailable_percent GoogleComputeInstanceGroupManager#max_unavailable_percent}

---

##### `minReadySec`<sup>Optional</sup> <a name="minReadySec" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.minReadySec"></a>

```java
public java.lang.Number getMinReadySec();
```

- *Type:* java.lang.Number

Minimum number of seconds to wait for after a newly created instance becomes available.

This value must be from range [0, 3600].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#min_ready_sec GoogleComputeInstanceGroupManager#min_ready_sec}

---

##### `mostDisruptiveAllowedAction`<sup>Optional</sup> <a name="mostDisruptiveAllowedAction" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.mostDisruptiveAllowedAction"></a>

```java
public java.lang.String getMostDisruptiveAllowedAction();
```

- *Type:* java.lang.String

Most disruptive action that is allowed to be taken on an instance.

You can specify either NONE to forbid any actions, REFRESH to allow actions that do not need instance restart, RESTART to allow actions that can be applied without instance replacing or REPLACE to allow all possible actions. If the Updater determines that the minimal update action needed is more disruptive than most disruptive allowed action you specify it will not perform the update at all.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#most_disruptive_allowed_action GoogleComputeInstanceGroupManager#most_disruptive_allowed_action}

---

##### `replacementMethod`<sup>Optional</sup> <a name="replacementMethod" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.replacementMethod"></a>

```java
public java.lang.String getReplacementMethod();
```

- *Type:* java.lang.String

The instance replacement method for managed instance groups.

Valid values are: "RECREATE", "SUBSTITUTE". If SUBSTITUTE (default), the group replaces VM instances with new instances that have randomly generated names. If RECREATE, instance names are preserved.  You must also set max_unavailable_fixed or max_unavailable_percent to be greater than 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#replacement_method GoogleComputeInstanceGroupManager#replacement_method}

---

### GoogleComputeInstanceGroupManagerVersion <a name="GoogleComputeInstanceGroupManagerVersion" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManagerVersion;

GoogleComputeInstanceGroupManagerVersion.builder()
    .instanceTemplate(java.lang.String)
//  .name(java.lang.String)
//  .targetSize(GoogleComputeInstanceGroupManagerVersionTargetSize)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion.property.instanceTemplate">instanceTemplate</a></code> | <code>java.lang.String</code> | The full URL to an instance template from which all new instances of this version will be created. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion.property.name">name</a></code> | <code>java.lang.String</code> | Version name. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion.property.targetSize">targetSize</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSize">GoogleComputeInstanceGroupManagerVersionTargetSize</a></code> | target_size block. |

---

##### `instanceTemplate`<sup>Required</sup> <a name="instanceTemplate" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion.property.instanceTemplate"></a>

```java
public java.lang.String getInstanceTemplate();
```

- *Type:* java.lang.String

The full URL to an instance template from which all new instances of this version will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#instance_template GoogleComputeInstanceGroupManager#instance_template}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Version name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#name GoogleComputeInstanceGroupManager#name}

---

##### `targetSize`<sup>Optional</sup> <a name="targetSize" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion.property.targetSize"></a>

```java
public GoogleComputeInstanceGroupManagerVersionTargetSize getTargetSize();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSize">GoogleComputeInstanceGroupManagerVersionTargetSize</a>

target_size block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#target_size GoogleComputeInstanceGroupManager#target_size}

---

### GoogleComputeInstanceGroupManagerVersionTargetSize <a name="GoogleComputeInstanceGroupManagerVersionTargetSize" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSize.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManagerVersionTargetSize;

GoogleComputeInstanceGroupManagerVersionTargetSize.builder()
//  .fixed(java.lang.Number)
//  .percent(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSize.property.fixed">fixed</a></code> | <code>java.lang.Number</code> | The number of instances which are managed for this version. Conflicts with percent. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSize.property.percent">percent</a></code> | <code>java.lang.Number</code> | The number of instances (calculated as percentage) which are managed for this version. |

---

##### `fixed`<sup>Optional</sup> <a name="fixed" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSize.property.fixed"></a>

```java
public java.lang.Number getFixed();
```

- *Type:* java.lang.Number

The number of instances which are managed for this version. Conflicts with percent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#fixed GoogleComputeInstanceGroupManager#fixed}

---

##### `percent`<sup>Optional</sup> <a name="percent" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSize.property.percent"></a>

```java
public java.lang.Number getPercent();
```

- *Type:* java.lang.Number

The number of instances (calculated as percentage) which are managed for this version.

Conflicts with fixed. Note that when using percent, rounding will be in favor of explicitly set target_size values; a managed instance group with 2 instances and 2 versions, one of which has a target_size.percent of 60 will create 2 instances of that version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_instance_group_manager#percent GoogleComputeInstanceGroupManager#percent}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference <a name="GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference;

new GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.resetMetadata">resetMetadata</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.resetMetadata"></a>

```java
public void resetMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.metadataInput">metadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig">GoogleComputeInstanceGroupManagerAllInstancesConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.metadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.internalValue"></a>

```java
public GoogleComputeInstanceGroupManagerAllInstancesConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig">GoogleComputeInstanceGroupManagerAllInstancesConfig</a>

---


### GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference <a name="GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference;

new GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.healthCheckInput">healthCheckInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.initialDelaySecInput">initialDelaySecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.healthCheck">healthCheck</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.initialDelaySec">initialDelaySec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies">GoogleComputeInstanceGroupManagerAutoHealingPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `healthCheckInput`<sup>Optional</sup> <a name="healthCheckInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.healthCheckInput"></a>

```java
public java.lang.String getHealthCheckInput();
```

- *Type:* java.lang.String

---

##### `initialDelaySecInput`<sup>Optional</sup> <a name="initialDelaySecInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.initialDelaySecInput"></a>

```java
public java.lang.Number getInitialDelaySecInput();
```

- *Type:* java.lang.Number

---

##### `healthCheck`<sup>Required</sup> <a name="healthCheck" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.healthCheck"></a>

```java
public java.lang.String getHealthCheck();
```

- *Type:* java.lang.String

---

##### `initialDelaySec`<sup>Required</sup> <a name="initialDelaySec" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.initialDelaySec"></a>

```java
public java.lang.Number getInitialDelaySec();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.internalValue"></a>

```java
public GoogleComputeInstanceGroupManagerAutoHealingPolicies getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies">GoogleComputeInstanceGroupManagerAutoHealingPolicies</a>

---


### GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference <a name="GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference;

new GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.resetAllowChangingZone">resetAllowChangingZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowChangingZone` <a name="resetAllowChangingZone" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.resetAllowChangingZone"></a>

```java
public void resetAllowChangingZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.property.allowChangingZoneInput">allowChangingZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.property.allowChangingZone">allowChangingZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepair">GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepair</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowChangingZoneInput`<sup>Optional</sup> <a name="allowChangingZoneInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.property.allowChangingZoneInput"></a>

```java
public java.lang.String getAllowChangingZoneInput();
```

- *Type:* java.lang.String

---

##### `allowChangingZone`<sup>Required</sup> <a name="allowChangingZone" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.property.allowChangingZone"></a>

```java
public java.lang.String getAllowChangingZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.property.internalValue"></a>

```java
public GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepair getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepair">GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepair</a>

---


### GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference <a name="GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference;

new GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.putOnRepair">putOnRepair</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resetDefaultActionOnFailure">resetDefaultActionOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resetForceUpdateOnRepair">resetForceUpdateOnRepair</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resetOnFailedHealthCheck">resetOnFailedHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resetOnRepair">resetOnRepair</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOnRepair` <a name="putOnRepair" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.putOnRepair"></a>

```java
public void putOnRepair(GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepair value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.putOnRepair.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepair">GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepair</a>

---

##### `resetDefaultActionOnFailure` <a name="resetDefaultActionOnFailure" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resetDefaultActionOnFailure"></a>

```java
public void resetDefaultActionOnFailure()
```

##### `resetForceUpdateOnRepair` <a name="resetForceUpdateOnRepair" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resetForceUpdateOnRepair"></a>

```java
public void resetForceUpdateOnRepair()
```

##### `resetOnFailedHealthCheck` <a name="resetOnFailedHealthCheck" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resetOnFailedHealthCheck"></a>

```java
public void resetOnFailedHealthCheck()
```

##### `resetOnRepair` <a name="resetOnRepair" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resetOnRepair"></a>

```java
public void resetOnRepair()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.onRepair">onRepair</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference">GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.defaultActionOnFailureInput">defaultActionOnFailureInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.forceUpdateOnRepairInput">forceUpdateOnRepairInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.onFailedHealthCheckInput">onFailedHealthCheckInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.onRepairInput">onRepairInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepair">GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepair</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.defaultActionOnFailure">defaultActionOnFailure</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.forceUpdateOnRepair">forceUpdateOnRepair</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.onFailedHealthCheck">onFailedHealthCheck</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy">GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `onRepair`<sup>Required</sup> <a name="onRepair" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.onRepair"></a>

```java
public GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference getOnRepair();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference">GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference</a>

---

##### `defaultActionOnFailureInput`<sup>Optional</sup> <a name="defaultActionOnFailureInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.defaultActionOnFailureInput"></a>

```java
public java.lang.String getDefaultActionOnFailureInput();
```

- *Type:* java.lang.String

---

##### `forceUpdateOnRepairInput`<sup>Optional</sup> <a name="forceUpdateOnRepairInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.forceUpdateOnRepairInput"></a>

```java
public java.lang.String getForceUpdateOnRepairInput();
```

- *Type:* java.lang.String

---

##### `onFailedHealthCheckInput`<sup>Optional</sup> <a name="onFailedHealthCheckInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.onFailedHealthCheckInput"></a>

```java
public java.lang.String getOnFailedHealthCheckInput();
```

- *Type:* java.lang.String

---

##### `onRepairInput`<sup>Optional</sup> <a name="onRepairInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.onRepairInput"></a>

```java
public GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepair getOnRepairInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepair">GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepair</a>

---

##### `defaultActionOnFailure`<sup>Required</sup> <a name="defaultActionOnFailure" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.defaultActionOnFailure"></a>

```java
public java.lang.String getDefaultActionOnFailure();
```

- *Type:* java.lang.String

---

##### `forceUpdateOnRepair`<sup>Required</sup> <a name="forceUpdateOnRepair" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.forceUpdateOnRepair"></a>

```java
public java.lang.String getForceUpdateOnRepair();
```

- *Type:* java.lang.String

---

##### `onFailedHealthCheck`<sup>Required</sup> <a name="onFailedHealthCheck" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.onFailedHealthCheck"></a>

```java
public java.lang.String getOnFailedHealthCheck();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.internalValue"></a>

```java
public GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy">GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy</a>

---


### GoogleComputeInstanceGroupManagerNamedPortList <a name="GoogleComputeInstanceGroupManagerNamedPortList" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManagerNamedPortList;

new GoogleComputeInstanceGroupManagerNamedPortList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.get"></a>

```java
public GoogleComputeInstanceGroupManagerNamedPortOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort">GoogleComputeInstanceGroupManagerNamedPort</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleComputeInstanceGroupManagerNamedPort> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort">GoogleComputeInstanceGroupManagerNamedPort</a>>

---


### GoogleComputeInstanceGroupManagerNamedPortOutputReference <a name="GoogleComputeInstanceGroupManagerNamedPortOutputReference" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManagerNamedPortOutputReference;

new GoogleComputeInstanceGroupManagerNamedPortOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort">GoogleComputeInstanceGroupManagerNamedPort</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleComputeInstanceGroupManagerNamedPort getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort">GoogleComputeInstanceGroupManagerNamedPort</a>

---


### GoogleComputeInstanceGroupManagerParamsOutputReference <a name="GoogleComputeInstanceGroupManagerParamsOutputReference" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManagerParamsOutputReference;

new GoogleComputeInstanceGroupManagerParamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.resetResourceManagerTags">resetResourceManagerTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceManagerTags` <a name="resetResourceManagerTags" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.resetResourceManagerTags"></a>

```java
public void resetResourceManagerTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.property.resourceManagerTagsInput">resourceManagerTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.property.resourceManagerTags">resourceManagerTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParams">GoogleComputeInstanceGroupManagerParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceManagerTagsInput`<sup>Optional</sup> <a name="resourceManagerTagsInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.property.resourceManagerTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceManagerTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `resourceManagerTags`<sup>Required</sup> <a name="resourceManagerTags" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.property.resourceManagerTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceManagerTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.property.internalValue"></a>

```java
public GoogleComputeInstanceGroupManagerParams getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParams">GoogleComputeInstanceGroupManagerParams</a>

---


### GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference <a name="GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference;

new GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.resetWorkloadPolicy">resetWorkloadPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkloadPolicy` <a name="resetWorkloadPolicy" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.resetWorkloadPolicy"></a>

```java
public void resetWorkloadPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.property.workloadPolicyInput">workloadPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.property.workloadPolicy">workloadPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePolicies">GoogleComputeInstanceGroupManagerResourcePolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workloadPolicyInput`<sup>Optional</sup> <a name="workloadPolicyInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.property.workloadPolicyInput"></a>

```java
public java.lang.String getWorkloadPolicyInput();
```

- *Type:* java.lang.String

---

##### `workloadPolicy`<sup>Required</sup> <a name="workloadPolicy" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.property.workloadPolicy"></a>

```java
public java.lang.String getWorkloadPolicy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.property.internalValue"></a>

```java
public GoogleComputeInstanceGroupManagerResourcePolicies getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerResourcePolicies">GoogleComputeInstanceGroupManagerResourcePolicies</a>

---


### GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference <a name="GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference;

new GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.resetInitialDelaySec">resetInitialDelaySec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.resetMode">resetMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInitialDelaySec` <a name="resetInitialDelaySec" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.resetInitialDelaySec"></a>

```java
public void resetInitialDelaySec()
```

##### `resetMode` <a name="resetMode" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.resetMode"></a>

```java
public void resetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.initialDelaySecInput">initialDelaySecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.initialDelaySec">initialDelaySec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy">GoogleComputeInstanceGroupManagerStandbyPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `initialDelaySecInput`<sup>Optional</sup> <a name="initialDelaySecInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.initialDelaySecInput"></a>

```java
public java.lang.Number getInitialDelaySecInput();
```

- *Type:* java.lang.Number

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `initialDelaySec`<sup>Required</sup> <a name="initialDelaySec" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.initialDelaySec"></a>

```java
public java.lang.Number getInitialDelaySec();
```

- *Type:* java.lang.Number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.internalValue"></a>

```java
public GoogleComputeInstanceGroupManagerStandbyPolicy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy">GoogleComputeInstanceGroupManagerStandbyPolicy</a>

---


### GoogleComputeInstanceGroupManagerStatefulDiskList <a name="GoogleComputeInstanceGroupManagerStatefulDiskList" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManagerStatefulDiskList;

new GoogleComputeInstanceGroupManagerStatefulDiskList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.get"></a>

```java
public GoogleComputeInstanceGroupManagerStatefulDiskOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk">GoogleComputeInstanceGroupManagerStatefulDisk</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleComputeInstanceGroupManagerStatefulDisk> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk">GoogleComputeInstanceGroupManagerStatefulDisk</a>>

---


### GoogleComputeInstanceGroupManagerStatefulDiskOutputReference <a name="GoogleComputeInstanceGroupManagerStatefulDiskOutputReference" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference;

new GoogleComputeInstanceGroupManagerStatefulDiskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.resetDeleteRule">resetDeleteRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeleteRule` <a name="resetDeleteRule" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.resetDeleteRule"></a>

```java
public void resetDeleteRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.deleteRuleInput">deleteRuleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.deviceNameInput">deviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.deleteRule">deleteRule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk">GoogleComputeInstanceGroupManagerStatefulDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deleteRuleInput`<sup>Optional</sup> <a name="deleteRuleInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.deleteRuleInput"></a>

```java
public java.lang.String getDeleteRuleInput();
```

- *Type:* java.lang.String

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.deviceNameInput"></a>

```java
public java.lang.String getDeviceNameInput();
```

- *Type:* java.lang.String

---

##### `deleteRule`<sup>Required</sup> <a name="deleteRule" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.deleteRule"></a>

```java
public java.lang.String getDeleteRule();
```

- *Type:* java.lang.String

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleComputeInstanceGroupManagerStatefulDisk getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk">GoogleComputeInstanceGroupManagerStatefulDisk</a>

---


### GoogleComputeInstanceGroupManagerStatefulExternalIpList <a name="GoogleComputeInstanceGroupManagerStatefulExternalIpList" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManagerStatefulExternalIpList;

new GoogleComputeInstanceGroupManagerStatefulExternalIpList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.get"></a>

```java
public GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp">GoogleComputeInstanceGroupManagerStatefulExternalIp</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleComputeInstanceGroupManagerStatefulExternalIp> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp">GoogleComputeInstanceGroupManagerStatefulExternalIp</a>>

---


### GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference <a name="GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference;

new GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.resetDeleteRule">resetDeleteRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.resetInterfaceName">resetInterfaceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeleteRule` <a name="resetDeleteRule" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.resetDeleteRule"></a>

```java
public void resetDeleteRule()
```

##### `resetInterfaceName` <a name="resetInterfaceName" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.resetInterfaceName"></a>

```java
public void resetInterfaceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.deleteRuleInput">deleteRuleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.interfaceNameInput">interfaceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.deleteRule">deleteRule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.interfaceName">interfaceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp">GoogleComputeInstanceGroupManagerStatefulExternalIp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deleteRuleInput`<sup>Optional</sup> <a name="deleteRuleInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.deleteRuleInput"></a>

```java
public java.lang.String getDeleteRuleInput();
```

- *Type:* java.lang.String

---

##### `interfaceNameInput`<sup>Optional</sup> <a name="interfaceNameInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.interfaceNameInput"></a>

```java
public java.lang.String getInterfaceNameInput();
```

- *Type:* java.lang.String

---

##### `deleteRule`<sup>Required</sup> <a name="deleteRule" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.deleteRule"></a>

```java
public java.lang.String getDeleteRule();
```

- *Type:* java.lang.String

---

##### `interfaceName`<sup>Required</sup> <a name="interfaceName" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.interfaceName"></a>

```java
public java.lang.String getInterfaceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleComputeInstanceGroupManagerStatefulExternalIp getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp">GoogleComputeInstanceGroupManagerStatefulExternalIp</a>

---


### GoogleComputeInstanceGroupManagerStatefulInternalIpList <a name="GoogleComputeInstanceGroupManagerStatefulInternalIpList" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManagerStatefulInternalIpList;

new GoogleComputeInstanceGroupManagerStatefulInternalIpList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.get"></a>

```java
public GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp">GoogleComputeInstanceGroupManagerStatefulInternalIp</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleComputeInstanceGroupManagerStatefulInternalIp> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp">GoogleComputeInstanceGroupManagerStatefulInternalIp</a>>

---


### GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference <a name="GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference;

new GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.resetDeleteRule">resetDeleteRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.resetInterfaceName">resetInterfaceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeleteRule` <a name="resetDeleteRule" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.resetDeleteRule"></a>

```java
public void resetDeleteRule()
```

##### `resetInterfaceName` <a name="resetInterfaceName" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.resetInterfaceName"></a>

```java
public void resetInterfaceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.deleteRuleInput">deleteRuleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.interfaceNameInput">interfaceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.deleteRule">deleteRule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.interfaceName">interfaceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp">GoogleComputeInstanceGroupManagerStatefulInternalIp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deleteRuleInput`<sup>Optional</sup> <a name="deleteRuleInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.deleteRuleInput"></a>

```java
public java.lang.String getDeleteRuleInput();
```

- *Type:* java.lang.String

---

##### `interfaceNameInput`<sup>Optional</sup> <a name="interfaceNameInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.interfaceNameInput"></a>

```java
public java.lang.String getInterfaceNameInput();
```

- *Type:* java.lang.String

---

##### `deleteRule`<sup>Required</sup> <a name="deleteRule" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.deleteRule"></a>

```java
public java.lang.String getDeleteRule();
```

- *Type:* java.lang.String

---

##### `interfaceName`<sup>Required</sup> <a name="interfaceName" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.interfaceName"></a>

```java
public java.lang.String getInterfaceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleComputeInstanceGroupManagerStatefulInternalIp getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp">GoogleComputeInstanceGroupManagerStatefulInternalIp</a>

---


### GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList <a name="GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList;

new GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.get"></a>

```java
public GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference <a name="GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference;

new GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.currentRevision">currentRevision</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.effective">effective</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfig">GoogleComputeInstanceGroupManagerStatusAllInstancesConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `currentRevision`<sup>Required</sup> <a name="currentRevision" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.currentRevision"></a>

```java
public java.lang.String getCurrentRevision();
```

- *Type:* java.lang.String

---

##### `effective`<sup>Required</sup> <a name="effective" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.effective"></a>

```java
public IResolvable getEffective();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.internalValue"></a>

```java
public GoogleComputeInstanceGroupManagerStatusAllInstancesConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfig">GoogleComputeInstanceGroupManagerStatusAllInstancesConfig</a>

---


### GoogleComputeInstanceGroupManagerStatusList <a name="GoogleComputeInstanceGroupManagerStatusList" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManagerStatusList;

new GoogleComputeInstanceGroupManagerStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.get"></a>

```java
public GoogleComputeInstanceGroupManagerStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleComputeInstanceGroupManagerStatusOutputReference <a name="GoogleComputeInstanceGroupManagerStatusOutputReference" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManagerStatusOutputReference;

new GoogleComputeInstanceGroupManagerStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.allInstancesConfig">allInstancesConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList">GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.isStable">isStable</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.stateful">stateful</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList">GoogleComputeInstanceGroupManagerStatusStatefulList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.versionTarget">versionTarget</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList">GoogleComputeInstanceGroupManagerStatusVersionTargetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatus">GoogleComputeInstanceGroupManagerStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allInstancesConfig`<sup>Required</sup> <a name="allInstancesConfig" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.allInstancesConfig"></a>

```java
public GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList getAllInstancesConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList">GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList</a>

---

##### `isStable`<sup>Required</sup> <a name="isStable" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.isStable"></a>

```java
public IResolvable getIsStable();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `stateful`<sup>Required</sup> <a name="stateful" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.stateful"></a>

```java
public GoogleComputeInstanceGroupManagerStatusStatefulList getStateful();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList">GoogleComputeInstanceGroupManagerStatusStatefulList</a>

---

##### `versionTarget`<sup>Required</sup> <a name="versionTarget" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.versionTarget"></a>

```java
public GoogleComputeInstanceGroupManagerStatusVersionTargetList getVersionTarget();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList">GoogleComputeInstanceGroupManagerStatusVersionTargetList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.internalValue"></a>

```java
public GoogleComputeInstanceGroupManagerStatus getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatus">GoogleComputeInstanceGroupManagerStatus</a>

---


### GoogleComputeInstanceGroupManagerStatusStatefulList <a name="GoogleComputeInstanceGroupManagerStatusStatefulList" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManagerStatusStatefulList;

new GoogleComputeInstanceGroupManagerStatusStatefulList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.get"></a>

```java
public GoogleComputeInstanceGroupManagerStatusStatefulOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleComputeInstanceGroupManagerStatusStatefulOutputReference <a name="GoogleComputeInstanceGroupManagerStatusStatefulOutputReference" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference;

new GoogleComputeInstanceGroupManagerStatusStatefulOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.hasStatefulConfig">hasStatefulConfig</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.perInstanceConfigs">perInstanceConfigs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList">GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStateful">GoogleComputeInstanceGroupManagerStatusStateful</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hasStatefulConfig`<sup>Required</sup> <a name="hasStatefulConfig" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.hasStatefulConfig"></a>

```java
public IResolvable getHasStatefulConfig();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `perInstanceConfigs`<sup>Required</sup> <a name="perInstanceConfigs" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.perInstanceConfigs"></a>

```java
public GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList getPerInstanceConfigs();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList">GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.internalValue"></a>

```java
public GoogleComputeInstanceGroupManagerStatusStateful getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStateful">GoogleComputeInstanceGroupManagerStatusStateful</a>

---


### GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList <a name="GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList;

new GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.get"></a>

```java
public GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference <a name="GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference;

new GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.allEffective">allEffective</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs">GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allEffective`<sup>Required</sup> <a name="allEffective" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.allEffective"></a>

```java
public IResolvable getAllEffective();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.internalValue"></a>

```java
public GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs">GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs</a>

---


### GoogleComputeInstanceGroupManagerStatusVersionTargetList <a name="GoogleComputeInstanceGroupManagerStatusVersionTargetList" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManagerStatusVersionTargetList;

new GoogleComputeInstanceGroupManagerStatusVersionTargetList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.get"></a>

```java
public GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference <a name="GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference;

new GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.isReached">isReached</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTarget">GoogleComputeInstanceGroupManagerStatusVersionTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isReached`<sup>Required</sup> <a name="isReached" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.isReached"></a>

```java
public IResolvable getIsReached();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.internalValue"></a>

```java
public GoogleComputeInstanceGroupManagerStatusVersionTarget getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTarget">GoogleComputeInstanceGroupManagerStatusVersionTarget</a>

---


### GoogleComputeInstanceGroupManagerTargetSizePolicyList <a name="GoogleComputeInstanceGroupManagerTargetSizePolicyList" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManagerTargetSizePolicyList;

new GoogleComputeInstanceGroupManagerTargetSizePolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyList.get"></a>

```java
public GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicy">GoogleComputeInstanceGroupManagerTargetSizePolicy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleComputeInstanceGroupManagerTargetSizePolicy> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicy">GoogleComputeInstanceGroupManagerTargetSizePolicy</a>>

---


### GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference <a name="GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference;

new GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicy">GoogleComputeInstanceGroupManagerTargetSizePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleComputeInstanceGroupManagerTargetSizePolicy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTargetSizePolicy">GoogleComputeInstanceGroupManagerTargetSizePolicy</a>

---


### GoogleComputeInstanceGroupManagerTimeoutsOutputReference <a name="GoogleComputeInstanceGroupManagerTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference;

new GoogleComputeInstanceGroupManagerTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts">GoogleComputeInstanceGroupManagerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleComputeInstanceGroupManagerTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts">GoogleComputeInstanceGroupManagerTimeouts</a>

---


### GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference <a name="GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference;

new GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMaxSurgeFixed">resetMaxSurgeFixed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMaxSurgePercent">resetMaxSurgePercent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMaxUnavailableFixed">resetMaxUnavailableFixed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMaxUnavailablePercent">resetMaxUnavailablePercent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMinReadySec">resetMinReadySec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMostDisruptiveAllowedAction">resetMostDisruptiveAllowedAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetReplacementMethod">resetReplacementMethod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxSurgeFixed` <a name="resetMaxSurgeFixed" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMaxSurgeFixed"></a>

```java
public void resetMaxSurgeFixed()
```

##### `resetMaxSurgePercent` <a name="resetMaxSurgePercent" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMaxSurgePercent"></a>

```java
public void resetMaxSurgePercent()
```

##### `resetMaxUnavailableFixed` <a name="resetMaxUnavailableFixed" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMaxUnavailableFixed"></a>

```java
public void resetMaxUnavailableFixed()
```

##### `resetMaxUnavailablePercent` <a name="resetMaxUnavailablePercent" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMaxUnavailablePercent"></a>

```java
public void resetMaxUnavailablePercent()
```

##### `resetMinReadySec` <a name="resetMinReadySec" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMinReadySec"></a>

```java
public void resetMinReadySec()
```

##### `resetMostDisruptiveAllowedAction` <a name="resetMostDisruptiveAllowedAction" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMostDisruptiveAllowedAction"></a>

```java
public void resetMostDisruptiveAllowedAction()
```

##### `resetReplacementMethod` <a name="resetReplacementMethod" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetReplacementMethod"></a>

```java
public void resetReplacementMethod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgeFixedInput">maxSurgeFixedInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgePercentInput">maxSurgePercentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailableFixedInput">maxUnavailableFixedInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailablePercentInput">maxUnavailablePercentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.minimalActionInput">minimalActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.minReadySecInput">minReadySecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.mostDisruptiveAllowedActionInput">mostDisruptiveAllowedActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.replacementMethodInput">replacementMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgeFixed">maxSurgeFixed</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgePercent">maxSurgePercent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailableFixed">maxUnavailableFixed</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailablePercent">maxUnavailablePercent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.minimalAction">minimalAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.minReadySec">minReadySec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.mostDisruptiveAllowedAction">mostDisruptiveAllowedAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.replacementMethod">replacementMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy">GoogleComputeInstanceGroupManagerUpdatePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxSurgeFixedInput`<sup>Optional</sup> <a name="maxSurgeFixedInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgeFixedInput"></a>

```java
public java.lang.Number getMaxSurgeFixedInput();
```

- *Type:* java.lang.Number

---

##### `maxSurgePercentInput`<sup>Optional</sup> <a name="maxSurgePercentInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgePercentInput"></a>

```java
public java.lang.Number getMaxSurgePercentInput();
```

- *Type:* java.lang.Number

---

##### `maxUnavailableFixedInput`<sup>Optional</sup> <a name="maxUnavailableFixedInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailableFixedInput"></a>

```java
public java.lang.Number getMaxUnavailableFixedInput();
```

- *Type:* java.lang.Number

---

##### `maxUnavailablePercentInput`<sup>Optional</sup> <a name="maxUnavailablePercentInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailablePercentInput"></a>

```java
public java.lang.Number getMaxUnavailablePercentInput();
```

- *Type:* java.lang.Number

---

##### `minimalActionInput`<sup>Optional</sup> <a name="minimalActionInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.minimalActionInput"></a>

```java
public java.lang.String getMinimalActionInput();
```

- *Type:* java.lang.String

---

##### `minReadySecInput`<sup>Optional</sup> <a name="minReadySecInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.minReadySecInput"></a>

```java
public java.lang.Number getMinReadySecInput();
```

- *Type:* java.lang.Number

---

##### `mostDisruptiveAllowedActionInput`<sup>Optional</sup> <a name="mostDisruptiveAllowedActionInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.mostDisruptiveAllowedActionInput"></a>

```java
public java.lang.String getMostDisruptiveAllowedActionInput();
```

- *Type:* java.lang.String

---

##### `replacementMethodInput`<sup>Optional</sup> <a name="replacementMethodInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.replacementMethodInput"></a>

```java
public java.lang.String getReplacementMethodInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `maxSurgeFixed`<sup>Required</sup> <a name="maxSurgeFixed" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgeFixed"></a>

```java
public java.lang.Number getMaxSurgeFixed();
```

- *Type:* java.lang.Number

---

##### `maxSurgePercent`<sup>Required</sup> <a name="maxSurgePercent" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgePercent"></a>

```java
public java.lang.Number getMaxSurgePercent();
```

- *Type:* java.lang.Number

---

##### `maxUnavailableFixed`<sup>Required</sup> <a name="maxUnavailableFixed" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailableFixed"></a>

```java
public java.lang.Number getMaxUnavailableFixed();
```

- *Type:* java.lang.Number

---

##### `maxUnavailablePercent`<sup>Required</sup> <a name="maxUnavailablePercent" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailablePercent"></a>

```java
public java.lang.Number getMaxUnavailablePercent();
```

- *Type:* java.lang.Number

---

##### `minimalAction`<sup>Required</sup> <a name="minimalAction" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.minimalAction"></a>

```java
public java.lang.String getMinimalAction();
```

- *Type:* java.lang.String

---

##### `minReadySec`<sup>Required</sup> <a name="minReadySec" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.minReadySec"></a>

```java
public java.lang.Number getMinReadySec();
```

- *Type:* java.lang.Number

---

##### `mostDisruptiveAllowedAction`<sup>Required</sup> <a name="mostDisruptiveAllowedAction" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.mostDisruptiveAllowedAction"></a>

```java
public java.lang.String getMostDisruptiveAllowedAction();
```

- *Type:* java.lang.String

---

##### `replacementMethod`<sup>Required</sup> <a name="replacementMethod" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.replacementMethod"></a>

```java
public java.lang.String getReplacementMethod();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.internalValue"></a>

```java
public GoogleComputeInstanceGroupManagerUpdatePolicy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy">GoogleComputeInstanceGroupManagerUpdatePolicy</a>

---


### GoogleComputeInstanceGroupManagerVersionList <a name="GoogleComputeInstanceGroupManagerVersionList" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManagerVersionList;

new GoogleComputeInstanceGroupManagerVersionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.get"></a>

```java
public GoogleComputeInstanceGroupManagerVersionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion">GoogleComputeInstanceGroupManagerVersion</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleComputeInstanceGroupManagerVersion> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion">GoogleComputeInstanceGroupManagerVersion</a>>

---


### GoogleComputeInstanceGroupManagerVersionOutputReference <a name="GoogleComputeInstanceGroupManagerVersionOutputReference" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManagerVersionOutputReference;

new GoogleComputeInstanceGroupManagerVersionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.putTargetSize">putTargetSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.resetTargetSize">resetTargetSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargetSize` <a name="putTargetSize" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.putTargetSize"></a>

```java
public void putTargetSize(GoogleComputeInstanceGroupManagerVersionTargetSize value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.putTargetSize.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSize">GoogleComputeInstanceGroupManagerVersionTargetSize</a>

---

##### `resetName` <a name="resetName" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetTargetSize` <a name="resetTargetSize" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.resetTargetSize"></a>

```java
public void resetTargetSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.targetSize">targetSize</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference">GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.instanceTemplateInput">instanceTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.targetSizeInput">targetSizeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSize">GoogleComputeInstanceGroupManagerVersionTargetSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.instanceTemplate">instanceTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion">GoogleComputeInstanceGroupManagerVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `targetSize`<sup>Required</sup> <a name="targetSize" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.targetSize"></a>

```java
public GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference getTargetSize();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference">GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference</a>

---

##### `instanceTemplateInput`<sup>Optional</sup> <a name="instanceTemplateInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.instanceTemplateInput"></a>

```java
public java.lang.String getInstanceTemplateInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `targetSizeInput`<sup>Optional</sup> <a name="targetSizeInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.targetSizeInput"></a>

```java
public GoogleComputeInstanceGroupManagerVersionTargetSize getTargetSizeInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSize">GoogleComputeInstanceGroupManagerVersionTargetSize</a>

---

##### `instanceTemplate`<sup>Required</sup> <a name="instanceTemplate" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.instanceTemplate"></a>

```java
public java.lang.String getInstanceTemplate();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleComputeInstanceGroupManagerVersion getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion">GoogleComputeInstanceGroupManagerVersion</a>

---


### GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference <a name="GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_instance_group_manager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference;

new GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.resetFixed">resetFixed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.resetPercent">resetPercent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFixed` <a name="resetFixed" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.resetFixed"></a>

```java
public void resetFixed()
```

##### `resetPercent` <a name="resetPercent" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.resetPercent"></a>

```java
public void resetPercent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.fixedInput">fixedInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.percentInput">percentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.fixed">fixed</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.percent">percent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSize">GoogleComputeInstanceGroupManagerVersionTargetSize</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fixedInput`<sup>Optional</sup> <a name="fixedInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.fixedInput"></a>

```java
public java.lang.Number getFixedInput();
```

- *Type:* java.lang.Number

---

##### `percentInput`<sup>Optional</sup> <a name="percentInput" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.percentInput"></a>

```java
public java.lang.Number getPercentInput();
```

- *Type:* java.lang.Number

---

##### `fixed`<sup>Required</sup> <a name="fixed" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.fixed"></a>

```java
public java.lang.Number getFixed();
```

- *Type:* java.lang.Number

---

##### `percent`<sup>Required</sup> <a name="percent" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.percent"></a>

```java
public java.lang.Number getPercent();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.internalValue"></a>

```java
public GoogleComputeInstanceGroupManagerVersionTargetSize getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSize">GoogleComputeInstanceGroupManagerVersionTargetSize</a>

---



