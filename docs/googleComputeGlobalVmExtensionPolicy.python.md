# `googleComputeGlobalVmExtensionPolicy` Submodule <a name="`googleComputeGlobalVmExtensionPolicy` Submodule" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeGlobalVmExtensionPolicy <a name="GoogleComputeGlobalVmExtensionPolicy" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_global_vm_extension_policy google_compute_global_vm_extension_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_global_vm_extension_policy

googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  extension_policies: IResolvable | typing.List[GoogleComputeGlobalVmExtensionPolicyExtensionPolicies],
  name: str,
  rollout_operation: GoogleComputeGlobalVmExtensionPolicyRolloutOperation,
  deletion_policy: str = None,
  description: str = None,
  instance_selectors: IResolvable | typing.List[GoogleComputeGlobalVmExtensionPolicyInstanceSelectors] = None,
  priority: typing.Union[int, float] = None,
  project: str = None,
  timeouts: GoogleComputeGlobalVmExtensionPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.Initializer.parameter.extensionPolicies">extension_policies</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPolicies">GoogleComputeGlobalVmExtensionPolicyExtensionPolicies</a>]</code> | extension_policies block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.Initializer.parameter.rolloutOperation">rollout_operation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperation">GoogleComputeGlobalVmExtensionPolicyRolloutOperation</a></code> | rollout_operation block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.Initializer.parameter.instanceSelectors">instance_selectors</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectors">GoogleComputeGlobalVmExtensionPolicyInstanceSelectors</a>]</code> | instance_selectors block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Used to resolve conflicts when multiple policies are active. Defaults to 0. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_global_vm_extension_policy#project GoogleComputeGlobalVmExtensionPolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeouts">GoogleComputeGlobalVmExtensionPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `extension_policies`<sup>Required</sup> <a name="extension_policies" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.Initializer.parameter.extensionPolicies"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPolicies">GoogleComputeGlobalVmExtensionPolicyExtensionPolicies</a>]

extension_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_global_vm_extension_policy#extension_policies GoogleComputeGlobalVmExtensionPolicy#extension_policies}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource.

Provided by the client when the resource is created. The name must be 1-63 characters long and match the regular expression '^[a-z](%5B-a-z0-9%5D%7B0,61%7D%5Ba-z0-9%5D)?$' to comply with RFC1035.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_global_vm_extension_policy#name GoogleComputeGlobalVmExtensionPolicy#name}

---

##### `rollout_operation`<sup>Required</sup> <a name="rollout_operation" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.Initializer.parameter.rolloutOperation"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperation">GoogleComputeGlobalVmExtensionPolicyRolloutOperation</a>

rollout_operation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_global_vm_extension_policy#rollout_operation GoogleComputeGlobalVmExtensionPolicy#rollout_operation}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_global_vm_extension_policy#deletion_policy GoogleComputeGlobalVmExtensionPolicy#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_global_vm_extension_policy#description GoogleComputeGlobalVmExtensionPolicy#description}

---

##### `instance_selectors`<sup>Optional</sup> <a name="instance_selectors" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.Initializer.parameter.instanceSelectors"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectors">GoogleComputeGlobalVmExtensionPolicyInstanceSelectors</a>]

instance_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_global_vm_extension_policy#instance_selectors GoogleComputeGlobalVmExtensionPolicy#instance_selectors}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Used to resolve conflicts when multiple policies are active. Defaults to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_global_vm_extension_policy#priority GoogleComputeGlobalVmExtensionPolicy#priority}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_global_vm_extension_policy#project GoogleComputeGlobalVmExtensionPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeouts">GoogleComputeGlobalVmExtensionPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_global_vm_extension_policy#timeouts GoogleComputeGlobalVmExtensionPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.putExtensionPolicies">put_extension_policies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.putInstanceSelectors">put_instance_selectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.putRolloutOperation">put_rollout_operation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.resetInstanceSelectors">reset_instance_selectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_extension_policies` <a name="put_extension_policies" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.putExtensionPolicies"></a>

```python
def put_extension_policies(
  value: IResolvable | typing.List[GoogleComputeGlobalVmExtensionPolicyExtensionPolicies]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.putExtensionPolicies.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPolicies">GoogleComputeGlobalVmExtensionPolicyExtensionPolicies</a>]

---

##### `put_instance_selectors` <a name="put_instance_selectors" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.putInstanceSelectors"></a>

```python
def put_instance_selectors(
  value: IResolvable | typing.List[GoogleComputeGlobalVmExtensionPolicyInstanceSelectors]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.putInstanceSelectors.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectors">GoogleComputeGlobalVmExtensionPolicyInstanceSelectors</a>]

---

##### `put_rollout_operation` <a name="put_rollout_operation" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.putRolloutOperation"></a>

```python
def put_rollout_operation(
  rollout_input: GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput
) -> None
```

###### `rollout_input`<sup>Required</sup> <a name="rollout_input" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.putRolloutOperation.parameter.rolloutInput"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput</a>

rollout_input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_global_vm_extension_policy#rollout_input GoogleComputeGlobalVmExtensionPolicy#rollout_input}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_global_vm_extension_policy#create GoogleComputeGlobalVmExtensionPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_global_vm_extension_policy#delete GoogleComputeGlobalVmExtensionPolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_global_vm_extension_policy#update GoogleComputeGlobalVmExtensionPolicy#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_instance_selectors` <a name="reset_instance_selectors" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.resetInstanceSelectors"></a>

```python
def reset_instance_selectors() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleComputeGlobalVmExtensionPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_compute_global_vm_extension_policy

googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.is_construct(
  x: typing.Any
)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_compute_global_vm_extension_policy

googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_compute_global_vm_extension_policy

googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_compute_global_vm_extension_policy

googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleComputeGlobalVmExtensionPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleComputeGlobalVmExtensionPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleComputeGlobalVmExtensionPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_global_vm_extension_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeGlobalVmExtensionPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.extensionPolicies">extension_policies</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList">GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.instanceSelectors">instance_selectors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList">GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.rolloutOperation">rollout_operation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference">GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.scopedResourceStatus">scoped_resource_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference">GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.updateTimestamp">update_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.extensionPoliciesInput">extension_policies_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPolicies">GoogleComputeGlobalVmExtensionPolicyExtensionPolicies</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.instanceSelectorsInput">instance_selectors_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectors">GoogleComputeGlobalVmExtensionPolicyInstanceSelectors</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.rolloutOperationInput">rollout_operation_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperation">GoogleComputeGlobalVmExtensionPolicyRolloutOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeouts">GoogleComputeGlobalVmExtensionPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `extension_policies`<sup>Required</sup> <a name="extension_policies" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.extensionPolicies"></a>

```python
extension_policies: GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList">GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_selectors`<sup>Required</sup> <a name="instance_selectors" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.instanceSelectors"></a>

```python
instance_selectors: GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList">GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList</a>

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `rollout_operation`<sup>Required</sup> <a name="rollout_operation" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.rolloutOperation"></a>

```python
rollout_operation: GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference">GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference</a>

---

##### `scoped_resource_status`<sup>Required</sup> <a name="scoped_resource_status" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.scopedResourceStatus"></a>

```python
scoped_resource_status: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.timeouts"></a>

```python
timeouts: GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference">GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference</a>

---

##### `update_timestamp`<sup>Required</sup> <a name="update_timestamp" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.updateTimestamp"></a>

```python
update_timestamp: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `extension_policies_input`<sup>Optional</sup> <a name="extension_policies_input" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.extensionPoliciesInput"></a>

```python
extension_policies_input: IResolvable | typing.List[GoogleComputeGlobalVmExtensionPolicyExtensionPolicies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPolicies">GoogleComputeGlobalVmExtensionPolicyExtensionPolicies</a>]

---

##### `instance_selectors_input`<sup>Optional</sup> <a name="instance_selectors_input" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.instanceSelectorsInput"></a>

```python
instance_selectors_input: IResolvable | typing.List[GoogleComputeGlobalVmExtensionPolicyInstanceSelectors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectors">GoogleComputeGlobalVmExtensionPolicyInstanceSelectors</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `rollout_operation_input`<sup>Optional</sup> <a name="rollout_operation_input" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.rolloutOperationInput"></a>

```python
rollout_operation_input: GoogleComputeGlobalVmExtensionPolicyRolloutOperation
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperation">GoogleComputeGlobalVmExtensionPolicyRolloutOperation</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleComputeGlobalVmExtensionPolicyTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeouts">GoogleComputeGlobalVmExtensionPolicyTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeGlobalVmExtensionPolicyConfig <a name="GoogleComputeGlobalVmExtensionPolicyConfig" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_global_vm_extension_policy

googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  extension_policies: IResolvable | typing.List[GoogleComputeGlobalVmExtensionPolicyExtensionPolicies],
  name: str,
  rollout_operation: GoogleComputeGlobalVmExtensionPolicyRolloutOperation,
  deletion_policy: str = None,
  description: str = None,
  instance_selectors: IResolvable | typing.List[GoogleComputeGlobalVmExtensionPolicyInstanceSelectors] = None,
  priority: typing.Union[int, float] = None,
  project: str = None,
  timeouts: GoogleComputeGlobalVmExtensionPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.extensionPolicies">extension_policies</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPolicies">GoogleComputeGlobalVmExtensionPolicyExtensionPolicies</a>]</code> | extension_policies block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.rolloutOperation">rollout_operation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperation">GoogleComputeGlobalVmExtensionPolicyRolloutOperation</a></code> | rollout_operation block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.instanceSelectors">instance_selectors</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectors">GoogleComputeGlobalVmExtensionPolicyInstanceSelectors</a>]</code> | instance_selectors block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Used to resolve conflicts when multiple policies are active. Defaults to 0. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_global_vm_extension_policy#project GoogleComputeGlobalVmExtensionPolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeouts">GoogleComputeGlobalVmExtensionPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `extension_policies`<sup>Required</sup> <a name="extension_policies" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.extensionPolicies"></a>

```python
extension_policies: IResolvable | typing.List[GoogleComputeGlobalVmExtensionPolicyExtensionPolicies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPolicies">GoogleComputeGlobalVmExtensionPolicyExtensionPolicies</a>]

extension_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_global_vm_extension_policy#extension_policies GoogleComputeGlobalVmExtensionPolicy#extension_policies}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource.

Provided by the client when the resource is created. The name must be 1-63 characters long and match the regular expression '^[a-z](%5B-a-z0-9%5D%7B0,61%7D%5Ba-z0-9%5D)?$' to comply with RFC1035.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_global_vm_extension_policy#name GoogleComputeGlobalVmExtensionPolicy#name}

---

##### `rollout_operation`<sup>Required</sup> <a name="rollout_operation" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.rolloutOperation"></a>

```python
rollout_operation: GoogleComputeGlobalVmExtensionPolicyRolloutOperation
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperation">GoogleComputeGlobalVmExtensionPolicyRolloutOperation</a>

rollout_operation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_global_vm_extension_policy#rollout_operation GoogleComputeGlobalVmExtensionPolicy#rollout_operation}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_global_vm_extension_policy#deletion_policy GoogleComputeGlobalVmExtensionPolicy#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_global_vm_extension_policy#description GoogleComputeGlobalVmExtensionPolicy#description}

---

##### `instance_selectors`<sup>Optional</sup> <a name="instance_selectors" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.instanceSelectors"></a>

```python
instance_selectors: IResolvable | typing.List[GoogleComputeGlobalVmExtensionPolicyInstanceSelectors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectors">GoogleComputeGlobalVmExtensionPolicyInstanceSelectors</a>]

instance_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_global_vm_extension_policy#instance_selectors GoogleComputeGlobalVmExtensionPolicy#instance_selectors}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Used to resolve conflicts when multiple policies are active. Defaults to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_global_vm_extension_policy#priority GoogleComputeGlobalVmExtensionPolicy#priority}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_global_vm_extension_policy#project GoogleComputeGlobalVmExtensionPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.timeouts"></a>

```python
timeouts: GoogleComputeGlobalVmExtensionPolicyTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeouts">GoogleComputeGlobalVmExtensionPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_global_vm_extension_policy#timeouts GoogleComputeGlobalVmExtensionPolicy#timeouts}

---

### GoogleComputeGlobalVmExtensionPolicyExtensionPolicies <a name="GoogleComputeGlobalVmExtensionPolicyExtensionPolicies" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPolicies.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_global_vm_extension_policy

googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPolicies(
  extension_name: str,
  pinned_version: str = None,
  string_config: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPolicies.property.extensionName">extension_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_global_vm_extension_policy#extension_name GoogleComputeGlobalVmExtensionPolicy#extension_name}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPolicies.property.pinnedVersion">pinned_version</a></code> | <code>str</code> | The version pinning for the extension. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPolicies.property.stringConfig">string_config</a></code> | <code>str</code> | String configuration payload. |

---

##### `extension_name`<sup>Required</sup> <a name="extension_name" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPolicies.property.extensionName"></a>

```python
extension_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_global_vm_extension_policy#extension_name GoogleComputeGlobalVmExtensionPolicy#extension_name}.

---

##### `pinned_version`<sup>Optional</sup> <a name="pinned_version" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPolicies.property.pinnedVersion"></a>

```python
pinned_version: str
```

- *Type:* str

The version pinning for the extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_global_vm_extension_policy#pinned_version GoogleComputeGlobalVmExtensionPolicy#pinned_version}

---

##### `string_config`<sup>Optional</sup> <a name="string_config" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPolicies.property.stringConfig"></a>

```python
string_config: str
```

- *Type:* str

String configuration payload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_global_vm_extension_policy#string_config GoogleComputeGlobalVmExtensionPolicy#string_config}

---

### GoogleComputeGlobalVmExtensionPolicyInstanceSelectors <a name="GoogleComputeGlobalVmExtensionPolicyInstanceSelectors" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectors.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_global_vm_extension_policy

googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectors(
  label_selector: GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectors.property.labelSelector">label_selector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector">GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector</a></code> | label_selector block. |

---

##### `label_selector`<sup>Optional</sup> <a name="label_selector" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectors.property.labelSelector"></a>

```python
label_selector: GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector">GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector</a>

label_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_global_vm_extension_policy#label_selector GoogleComputeGlobalVmExtensionPolicy#label_selector}

---

### GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector <a name="GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_global_vm_extension_policy

googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector(
  inclusion_labels: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector.property.inclusionLabels">inclusion_labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. |

---

##### `inclusion_labels`<sup>Optional</sup> <a name="inclusion_labels" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector.property.inclusionLabels"></a>

```python
inclusion_labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels as key value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_global_vm_extension_policy#inclusion_labels GoogleComputeGlobalVmExtensionPolicy#inclusion_labels}

---

### GoogleComputeGlobalVmExtensionPolicyRolloutOperation <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperation" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperation.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_global_vm_extension_policy

googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperation(
  rollout_input: GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperation.property.rolloutInput">rollout_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput</a></code> | rollout_input block. |

---

##### `rollout_input`<sup>Required</sup> <a name="rollout_input" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperation.property.rolloutInput"></a>

```python
rollout_input: GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput</a>

rollout_input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_global_vm_extension_policy#rollout_input GoogleComputeGlobalVmExtensionPolicy#rollout_input}

---

### GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_global_vm_extension_policy

googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput(
  conflict_behavior: str = None,
  name: str = None,
  predefined_rollout_plan: str = None,
  retry_uuid: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput.property.conflictBehavior">conflict_behavior</a></code> | <code>str</code> | Specifies the behavior of the rollout if a conflict is detected. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput.property.name">name</a></code> | <code>str</code> | The name of the rollout plan. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput.property.predefinedRolloutPlan">predefined_rollout_plan</a></code> | <code>str</code> | Specifies the predefined rollout plan for the policy. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput.property.retryUuid">retry_uuid</a></code> | <code>str</code> | The UUID that identifies a policy rollout retry attempt. |

---

##### `conflict_behavior`<sup>Optional</sup> <a name="conflict_behavior" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput.property.conflictBehavior"></a>

```python
conflict_behavior: str
```

- *Type:* str

Specifies the behavior of the rollout if a conflict is detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_global_vm_extension_policy#conflict_behavior GoogleComputeGlobalVmExtensionPolicy#conflict_behavior}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the rollout plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_global_vm_extension_policy#name GoogleComputeGlobalVmExtensionPolicy#name}

---

##### `predefined_rollout_plan`<sup>Optional</sup> <a name="predefined_rollout_plan" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput.property.predefinedRolloutPlan"></a>

```python
predefined_rollout_plan: str
```

- *Type:* str

Specifies the predefined rollout plan for the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_global_vm_extension_policy#predefined_rollout_plan GoogleComputeGlobalVmExtensionPolicy#predefined_rollout_plan}

---

##### `retry_uuid`<sup>Optional</sup> <a name="retry_uuid" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput.property.retryUuid"></a>

```python
retry_uuid: str
```

- *Type:* str

The UUID that identifies a policy rollout retry attempt.

It should only be set when retrying an existing rollout. Updating this field along with other policy fields (description, extension_policies, instance_selectors, priority) in the same plan will return an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_global_vm_extension_policy#retry_uuid GoogleComputeGlobalVmExtensionPolicy#retry_uuid}

---

### GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatus <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatus" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatus.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_global_vm_extension_policy

googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatus()
```


### GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRollouts <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRollouts" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRollouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRollouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_global_vm_extension_policy

googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRollouts()
```


### GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatus <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatus" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatus.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_global_vm_extension_policy

googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatus()
```


### GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRollout <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRollout" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRollout"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRollout.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_global_vm_extension_policy

googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRollout()
```


### GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatus <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatus" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatus.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_global_vm_extension_policy

googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatus()
```


### GoogleComputeGlobalVmExtensionPolicyTimeouts <a name="GoogleComputeGlobalVmExtensionPolicyTimeouts" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_global_vm_extension_policy

googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_global_vm_extension_policy#create GoogleComputeGlobalVmExtensionPolicy#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_global_vm_extension_policy#delete GoogleComputeGlobalVmExtensionPolicy#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_global_vm_extension_policy#update GoogleComputeGlobalVmExtensionPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_global_vm_extension_policy#create GoogleComputeGlobalVmExtensionPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_global_vm_extension_policy#delete GoogleComputeGlobalVmExtensionPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_global_vm_extension_policy#update GoogleComputeGlobalVmExtensionPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList <a name="GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_global_vm_extension_policy

googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPolicies">GoogleComputeGlobalVmExtensionPolicyExtensionPolicies</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleComputeGlobalVmExtensionPolicyExtensionPolicies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPolicies">GoogleComputeGlobalVmExtensionPolicyExtensionPolicies</a>]

---


### GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference <a name="GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_global_vm_extension_policy

googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.resetPinnedVersion">reset_pinned_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.resetStringConfig">reset_string_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_pinned_version` <a name="reset_pinned_version" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.resetPinnedVersion"></a>

```python
def reset_pinned_version() -> None
```

##### `reset_string_config` <a name="reset_string_config" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.resetStringConfig"></a>

```python
def reset_string_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.extensionNameInput">extension_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.pinnedVersionInput">pinned_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.stringConfigInput">string_config_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.extensionName">extension_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.pinnedVersion">pinned_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.stringConfig">string_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPolicies">GoogleComputeGlobalVmExtensionPolicyExtensionPolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `extension_name_input`<sup>Optional</sup> <a name="extension_name_input" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.extensionNameInput"></a>

```python
extension_name_input: str
```

- *Type:* str

---

##### `pinned_version_input`<sup>Optional</sup> <a name="pinned_version_input" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.pinnedVersionInput"></a>

```python
pinned_version_input: str
```

- *Type:* str

---

##### `string_config_input`<sup>Optional</sup> <a name="string_config_input" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.stringConfigInput"></a>

```python
string_config_input: str
```

- *Type:* str

---

##### `extension_name`<sup>Required</sup> <a name="extension_name" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.extensionName"></a>

```python
extension_name: str
```

- *Type:* str

---

##### `pinned_version`<sup>Required</sup> <a name="pinned_version" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.pinnedVersion"></a>

```python
pinned_version: str
```

- *Type:* str

---

##### `string_config`<sup>Required</sup> <a name="string_config" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.stringConfig"></a>

```python
string_config: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleComputeGlobalVmExtensionPolicyExtensionPolicies
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPolicies">GoogleComputeGlobalVmExtensionPolicyExtensionPolicies</a>

---


### GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference <a name="GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_global_vm_extension_policy

googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.resetInclusionLabels">reset_inclusion_labels</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_inclusion_labels` <a name="reset_inclusion_labels" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.resetInclusionLabels"></a>

```python
def reset_inclusion_labels() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.inclusionLabelsInput">inclusion_labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.inclusionLabels">inclusion_labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector">GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `inclusion_labels_input`<sup>Optional</sup> <a name="inclusion_labels_input" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.inclusionLabelsInput"></a>

```python
inclusion_labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `inclusion_labels`<sup>Required</sup> <a name="inclusion_labels" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.inclusionLabels"></a>

```python
inclusion_labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector">GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector</a>

---


### GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList <a name="GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_global_vm_extension_policy

googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectors">GoogleComputeGlobalVmExtensionPolicyInstanceSelectors</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleComputeGlobalVmExtensionPolicyInstanceSelectors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectors">GoogleComputeGlobalVmExtensionPolicyInstanceSelectors</a>]

---


### GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference <a name="GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_global_vm_extension_policy

googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.putLabelSelector">put_label_selector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.resetLabelSelector">reset_label_selector</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_label_selector` <a name="put_label_selector" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.putLabelSelector"></a>

```python
def put_label_selector(
  inclusion_labels: typing.Mapping[str] = None
) -> None
```

###### `inclusion_labels`<sup>Optional</sup> <a name="inclusion_labels" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.putLabelSelector.parameter.inclusionLabels"></a>

- *Type:* typing.Mapping[str]

Labels as key value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_global_vm_extension_policy#inclusion_labels GoogleComputeGlobalVmExtensionPolicy#inclusion_labels}

---

##### `reset_label_selector` <a name="reset_label_selector" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.resetLabelSelector"></a>

```python
def reset_label_selector() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.property.labelSelector">label_selector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference">GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.property.labelSelectorInput">label_selector_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector">GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectors">GoogleComputeGlobalVmExtensionPolicyInstanceSelectors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `label_selector`<sup>Required</sup> <a name="label_selector" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.property.labelSelector"></a>

```python
label_selector: GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference">GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference</a>

---

##### `label_selector_input`<sup>Optional</sup> <a name="label_selector_input" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.property.labelSelectorInput"></a>

```python
label_selector_input: GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector">GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleComputeGlobalVmExtensionPolicyInstanceSelectors
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectors">GoogleComputeGlobalVmExtensionPolicyInstanceSelectors</a>

---


### GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_global_vm_extension_policy

googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.putRolloutInput">put_rollout_input</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rollout_input` <a name="put_rollout_input" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.putRolloutInput"></a>

```python
def put_rollout_input(
  conflict_behavior: str = None,
  name: str = None,
  predefined_rollout_plan: str = None,
  retry_uuid: str = None
) -> None
```

###### `conflict_behavior`<sup>Optional</sup> <a name="conflict_behavior" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.putRolloutInput.parameter.conflictBehavior"></a>

- *Type:* str

Specifies the behavior of the rollout if a conflict is detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_global_vm_extension_policy#conflict_behavior GoogleComputeGlobalVmExtensionPolicy#conflict_behavior}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.putRolloutInput.parameter.name"></a>

- *Type:* str

The name of the rollout plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_global_vm_extension_policy#name GoogleComputeGlobalVmExtensionPolicy#name}

---

###### `predefined_rollout_plan`<sup>Optional</sup> <a name="predefined_rollout_plan" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.putRolloutInput.parameter.predefinedRolloutPlan"></a>

- *Type:* str

Specifies the predefined rollout plan for the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_global_vm_extension_policy#predefined_rollout_plan GoogleComputeGlobalVmExtensionPolicy#predefined_rollout_plan}

---

###### `retry_uuid`<sup>Optional</sup> <a name="retry_uuid" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.putRolloutInput.parameter.retryUuid"></a>

- *Type:* str

The UUID that identifies a policy rollout retry attempt.

It should only be set when retrying an existing rollout. Updating this field along with other policy fields (description, extension_policies, instance_selectors, priority) in the same plan will return an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_global_vm_extension_policy#retry_uuid GoogleComputeGlobalVmExtensionPolicy#retry_uuid}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.property.rolloutInput">rollout_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.property.rolloutStatus">rollout_status</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.property.rolloutInputInput">rollout_input_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperation">GoogleComputeGlobalVmExtensionPolicyRolloutOperation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rollout_input`<sup>Required</sup> <a name="rollout_input" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.property.rolloutInput"></a>

```python
rollout_input: GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference</a>

---

##### `rollout_status`<sup>Required</sup> <a name="rollout_status" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.property.rolloutStatus"></a>

```python
rollout_status: GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList</a>

---

##### `rollout_input_input`<sup>Optional</sup> <a name="rollout_input_input" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.property.rolloutInputInput"></a>

```python
rollout_input_input: GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeGlobalVmExtensionPolicyRolloutOperation
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperation">GoogleComputeGlobalVmExtensionPolicyRolloutOperation</a>

---


### GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_global_vm_extension_policy

googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.resetConflictBehavior">reset_conflict_behavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.resetPredefinedRolloutPlan">reset_predefined_rollout_plan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.resetRetryUuid">reset_retry_uuid</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_conflict_behavior` <a name="reset_conflict_behavior" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.resetConflictBehavior"></a>

```python
def reset_conflict_behavior() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_predefined_rollout_plan` <a name="reset_predefined_rollout_plan" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.resetPredefinedRolloutPlan"></a>

```python
def reset_predefined_rollout_plan() -> None
```

##### `reset_retry_uuid` <a name="reset_retry_uuid" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.resetRetryUuid"></a>

```python
def reset_retry_uuid() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.conflictBehaviorInput">conflict_behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.predefinedRolloutPlanInput">predefined_rollout_plan_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.retryUuidInput">retry_uuid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.conflictBehavior">conflict_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.predefinedRolloutPlan">predefined_rollout_plan</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.retryUuid">retry_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `conflict_behavior_input`<sup>Optional</sup> <a name="conflict_behavior_input" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.conflictBehaviorInput"></a>

```python
conflict_behavior_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `predefined_rollout_plan_input`<sup>Optional</sup> <a name="predefined_rollout_plan_input" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.predefinedRolloutPlanInput"></a>

```python
predefined_rollout_plan_input: str
```

- *Type:* str

---

##### `retry_uuid_input`<sup>Optional</sup> <a name="retry_uuid_input" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.retryUuidInput"></a>

```python
retry_uuid_input: str
```

- *Type:* str

---

##### `conflict_behavior`<sup>Required</sup> <a name="conflict_behavior" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.conflictBehavior"></a>

```python
conflict_behavior: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `predefined_rollout_plan`<sup>Required</sup> <a name="predefined_rollout_plan" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.predefinedRolloutPlan"></a>

```python
predefined_rollout_plan: str
```

- *Type:* str

---

##### `retry_uuid`<sup>Required</sup> <a name="retry_uuid" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.retryUuid"></a>

```python
retry_uuid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput</a>

---


### GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_global_vm_extension_policy

googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_global_vm_extension_policy

googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_global_vm_extension_policy

googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.property.locationName">location_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatus">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `location_name`<sup>Required</sup> <a name="location_name" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.property.locationName"></a>

```python
location_name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatus
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatus">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatus</a>

---


### GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_global_vm_extension_policy

googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.locationRolloutStatus">location_rollout_status</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.rollout">rollout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.rolloutPlan">rollout_plan</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRollouts">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRollouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `location_rollout_status`<sup>Required</sup> <a name="location_rollout_status" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.locationRolloutStatus"></a>

```python
location_rollout_status: GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList</a>

---

##### `rollout`<sup>Required</sup> <a name="rollout" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.rollout"></a>

```python
rollout: str
```

- *Type:* str

---

##### `rollout_plan`<sup>Required</sup> <a name="rollout_plan" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.rolloutPlan"></a>

```python
rollout_plan: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRollouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRollouts">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRollouts</a>

---


### GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_global_vm_extension_policy

googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_global_vm_extension_policy

googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.property.currentRollouts">current_rollouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.property.previousRollout">previous_rollout</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatus">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `current_rollouts`<sup>Required</sup> <a name="current_rollouts" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.property.currentRollouts"></a>

```python
current_rollouts: GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList</a>

---

##### `previous_rollout`<sup>Required</sup> <a name="previous_rollout" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.property.previousRollout"></a>

```python
previous_rollout: GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatus
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatus">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatus</a>

---


### GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_global_vm_extension_policy

googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_global_vm_extension_policy

googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_global_vm_extension_policy

googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.property.locationName">location_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatus">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `location_name`<sup>Required</sup> <a name="location_name" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.property.locationName"></a>

```python
location_name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatus
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatus">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatus</a>

---


### GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_global_vm_extension_policy

googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.locationRolloutStatus">location_rollout_status</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.rollout">rollout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.rolloutPlan">rollout_plan</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRollout">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRollout</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `location_rollout_status`<sup>Required</sup> <a name="location_rollout_status" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.locationRolloutStatus"></a>

```python
location_rollout_status: GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList</a>

---

##### `rollout`<sup>Required</sup> <a name="rollout" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.rollout"></a>

```python
rollout: str
```

- *Type:* str

---

##### `rollout_plan`<sup>Required</sup> <a name="rollout_plan" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.rolloutPlan"></a>

```python
rollout_plan: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRollout
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRollout">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRollout</a>

---


### GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference <a name="GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_global_vm_extension_policy

googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeouts">GoogleComputeGlobalVmExtensionPolicyTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleComputeGlobalVmExtensionPolicyTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeouts">GoogleComputeGlobalVmExtensionPolicyTimeouts</a>

---



