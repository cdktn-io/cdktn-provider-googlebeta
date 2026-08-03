# `googleComputeZoneVmExtensionPolicy` Submodule <a name="`googleComputeZoneVmExtensionPolicy` Submodule" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeZoneVmExtensionPolicy <a name="GoogleComputeZoneVmExtensionPolicy" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy google_compute_zone_vm_extension_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_zone_vm_extension_policy

googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  extension_policies: IResolvable | typing.List[GoogleComputeZoneVmExtensionPolicyExtensionPolicies],
  name: str,
  zone: str,
  deletion_policy: str = None,
  description: str = None,
  instance_selectors: IResolvable | typing.List[GoogleComputeZoneVmExtensionPolicyInstanceSelectors] = None,
  priority: typing.Union[int, float] = None,
  project: str = None,
  timeouts: GoogleComputeZoneVmExtensionPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.extensionPolicies">extension_policies</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies">GoogleComputeZoneVmExtensionPolicyExtensionPolicies</a>]</code> | extension_policies block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. Provided by the client when the resource is created. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.zone">zone</a></code> | <code>str</code> | Name of the zone for this request. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.instanceSelectors">instance_selectors</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors">GoogleComputeZoneVmExtensionPolicyInstanceSelectors</a>]</code> | instance_selectors block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Priority of this policy. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#project GoogleComputeZoneVmExtensionPolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts">GoogleComputeZoneVmExtensionPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `extension_policies`<sup>Required</sup> <a name="extension_policies" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.extensionPolicies"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies">GoogleComputeZoneVmExtensionPolicyExtensionPolicies</a>]

extension_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#extension_policies GoogleComputeZoneVmExtensionPolicy#extension_policies}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource. Provided by the client when the resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#name GoogleComputeZoneVmExtensionPolicy#name}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.zone"></a>

- *Type:* str

Name of the zone for this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#zone GoogleComputeZoneVmExtensionPolicy#zone}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#deletion_policy GoogleComputeZoneVmExtensionPolicy#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#description GoogleComputeZoneVmExtensionPolicy#description}

---

##### `instance_selectors`<sup>Optional</sup> <a name="instance_selectors" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.instanceSelectors"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors">GoogleComputeZoneVmExtensionPolicyInstanceSelectors</a>]

instance_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#instance_selectors GoogleComputeZoneVmExtensionPolicy#instance_selectors}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Priority of this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#priority GoogleComputeZoneVmExtensionPolicy#priority}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#project GoogleComputeZoneVmExtensionPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts">GoogleComputeZoneVmExtensionPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#timeouts GoogleComputeZoneVmExtensionPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.putExtensionPolicies">put_extension_policies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.putInstanceSelectors">put_instance_selectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetInstanceSelectors">reset_instance_selectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_extension_policies` <a name="put_extension_policies" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.putExtensionPolicies"></a>

```python
def put_extension_policies(
  value: IResolvable | typing.List[GoogleComputeZoneVmExtensionPolicyExtensionPolicies]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.putExtensionPolicies.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies">GoogleComputeZoneVmExtensionPolicyExtensionPolicies</a>]

---

##### `put_instance_selectors` <a name="put_instance_selectors" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.putInstanceSelectors"></a>

```python
def put_instance_selectors(
  value: IResolvable | typing.List[GoogleComputeZoneVmExtensionPolicyInstanceSelectors]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.putInstanceSelectors.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors">GoogleComputeZoneVmExtensionPolicyInstanceSelectors</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#create GoogleComputeZoneVmExtensionPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#delete GoogleComputeZoneVmExtensionPolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#update GoogleComputeZoneVmExtensionPolicy#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_instance_selectors` <a name="reset_instance_selectors" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetInstanceSelectors"></a>

```python
def reset_instance_selectors() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleComputeZoneVmExtensionPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_compute_zone_vm_extension_policy

googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_compute_zone_vm_extension_policy

googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_compute_zone_vm_extension_policy

googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_compute_zone_vm_extension_policy

googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleComputeZoneVmExtensionPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleComputeZoneVmExtensionPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleComputeZoneVmExtensionPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeZoneVmExtensionPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.extensionPolicies">extension_policies</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList">GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.instanceSelectors">instance_selectors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList">GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.managedByGlobal">managed_by_global</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference">GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.extensionPoliciesInput">extension_policies_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies">GoogleComputeZoneVmExtensionPolicyExtensionPolicies</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.instanceSelectorsInput">instance_selectors_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors">GoogleComputeZoneVmExtensionPolicyInstanceSelectors</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts">GoogleComputeZoneVmExtensionPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.zone">zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `extension_policies`<sup>Required</sup> <a name="extension_policies" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.extensionPolicies"></a>

```python
extension_policies: GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList">GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_selectors`<sup>Required</sup> <a name="instance_selectors" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.instanceSelectors"></a>

```python
instance_selectors: GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList">GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList</a>

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `managed_by_global`<sup>Required</sup> <a name="managed_by_global" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.managedByGlobal"></a>

```python
managed_by_global: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.timeouts"></a>

```python
timeouts: GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference">GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `extension_policies_input`<sup>Optional</sup> <a name="extension_policies_input" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.extensionPoliciesInput"></a>

```python
extension_policies_input: IResolvable | typing.List[GoogleComputeZoneVmExtensionPolicyExtensionPolicies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies">GoogleComputeZoneVmExtensionPolicyExtensionPolicies</a>]

---

##### `instance_selectors_input`<sup>Optional</sup> <a name="instance_selectors_input" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.instanceSelectorsInput"></a>

```python
instance_selectors_input: IResolvable | typing.List[GoogleComputeZoneVmExtensionPolicyInstanceSelectors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors">GoogleComputeZoneVmExtensionPolicyInstanceSelectors</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleComputeZoneVmExtensionPolicyTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts">GoogleComputeZoneVmExtensionPolicyTimeouts</a>

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeZoneVmExtensionPolicyConfig <a name="GoogleComputeZoneVmExtensionPolicyConfig" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_zone_vm_extension_policy

googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  extension_policies: IResolvable | typing.List[GoogleComputeZoneVmExtensionPolicyExtensionPolicies],
  name: str,
  zone: str,
  deletion_policy: str = None,
  description: str = None,
  instance_selectors: IResolvable | typing.List[GoogleComputeZoneVmExtensionPolicyInstanceSelectors] = None,
  priority: typing.Union[int, float] = None,
  project: str = None,
  timeouts: GoogleComputeZoneVmExtensionPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.extensionPolicies">extension_policies</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies">GoogleComputeZoneVmExtensionPolicyExtensionPolicies</a>]</code> | extension_policies block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. Provided by the client when the resource is created. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.zone">zone</a></code> | <code>str</code> | Name of the zone for this request. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.instanceSelectors">instance_selectors</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors">GoogleComputeZoneVmExtensionPolicyInstanceSelectors</a>]</code> | instance_selectors block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Priority of this policy. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#project GoogleComputeZoneVmExtensionPolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts">GoogleComputeZoneVmExtensionPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `extension_policies`<sup>Required</sup> <a name="extension_policies" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.extensionPolicies"></a>

```python
extension_policies: IResolvable | typing.List[GoogleComputeZoneVmExtensionPolicyExtensionPolicies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies">GoogleComputeZoneVmExtensionPolicyExtensionPolicies</a>]

extension_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#extension_policies GoogleComputeZoneVmExtensionPolicy#extension_policies}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource. Provided by the client when the resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#name GoogleComputeZoneVmExtensionPolicy#name}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

Name of the zone for this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#zone GoogleComputeZoneVmExtensionPolicy#zone}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#deletion_policy GoogleComputeZoneVmExtensionPolicy#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#description GoogleComputeZoneVmExtensionPolicy#description}

---

##### `instance_selectors`<sup>Optional</sup> <a name="instance_selectors" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.instanceSelectors"></a>

```python
instance_selectors: IResolvable | typing.List[GoogleComputeZoneVmExtensionPolicyInstanceSelectors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors">GoogleComputeZoneVmExtensionPolicyInstanceSelectors</a>]

instance_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#instance_selectors GoogleComputeZoneVmExtensionPolicy#instance_selectors}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Priority of this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#priority GoogleComputeZoneVmExtensionPolicy#priority}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#project GoogleComputeZoneVmExtensionPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.timeouts"></a>

```python
timeouts: GoogleComputeZoneVmExtensionPolicyTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts">GoogleComputeZoneVmExtensionPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#timeouts GoogleComputeZoneVmExtensionPolicy#timeouts}

---

### GoogleComputeZoneVmExtensionPolicyExtensionPolicies <a name="GoogleComputeZoneVmExtensionPolicyExtensionPolicies" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_zone_vm_extension_policy

googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies(
  extension_name: str,
  pinned_version: str = None,
  string_config: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies.property.extensionName">extension_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#extension_name GoogleComputeZoneVmExtensionPolicy#extension_name}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies.property.pinnedVersion">pinned_version</a></code> | <code>str</code> | The specific version of the extension to install. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies.property.stringConfig">string_config</a></code> | <code>str</code> | String-based configuration data for the extension. |

---

##### `extension_name`<sup>Required</sup> <a name="extension_name" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies.property.extensionName"></a>

```python
extension_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#extension_name GoogleComputeZoneVmExtensionPolicy#extension_name}.

---

##### `pinned_version`<sup>Optional</sup> <a name="pinned_version" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies.property.pinnedVersion"></a>

```python
pinned_version: str
```

- *Type:* str

The specific version of the extension to install.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#pinned_version GoogleComputeZoneVmExtensionPolicy#pinned_version}

---

##### `string_config`<sup>Optional</sup> <a name="string_config" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies.property.stringConfig"></a>

```python
string_config: str
```

- *Type:* str

String-based configuration data for the extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#string_config GoogleComputeZoneVmExtensionPolicy#string_config}

---

### GoogleComputeZoneVmExtensionPolicyInstanceSelectors <a name="GoogleComputeZoneVmExtensionPolicyInstanceSelectors" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_zone_vm_extension_policy

googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors(
  label_selector: GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors.property.labelSelector">label_selector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector">GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector</a></code> | label_selector block. |

---

##### `label_selector`<sup>Optional</sup> <a name="label_selector" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors.property.labelSelector"></a>

```python
label_selector: GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector">GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector</a>

label_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#label_selector GoogleComputeZoneVmExtensionPolicy#label_selector}

---

### GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector <a name="GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_zone_vm_extension_policy

googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector(
  inclusion_labels: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector.property.inclusionLabels">inclusion_labels</a></code> | <code>typing.Mapping[str]</code> | A map of key-value pairs representing VM labels. |

---

##### `inclusion_labels`<sup>Optional</sup> <a name="inclusion_labels" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector.property.inclusionLabels"></a>

```python
inclusion_labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of key-value pairs representing VM labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#inclusion_labels GoogleComputeZoneVmExtensionPolicy#inclusion_labels}

---

### GoogleComputeZoneVmExtensionPolicyTimeouts <a name="GoogleComputeZoneVmExtensionPolicyTimeouts" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_zone_vm_extension_policy

googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#create GoogleComputeZoneVmExtensionPolicy#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#delete GoogleComputeZoneVmExtensionPolicy#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#update GoogleComputeZoneVmExtensionPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#create GoogleComputeZoneVmExtensionPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#delete GoogleComputeZoneVmExtensionPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#update GoogleComputeZoneVmExtensionPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList <a name="GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_zone_vm_extension_policy

googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies">GoogleComputeZoneVmExtensionPolicyExtensionPolicies</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleComputeZoneVmExtensionPolicyExtensionPolicies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies">GoogleComputeZoneVmExtensionPolicyExtensionPolicies</a>]

---


### GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference <a name="GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_zone_vm_extension_policy

googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.resetPinnedVersion">reset_pinned_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.resetStringConfig">reset_string_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_pinned_version` <a name="reset_pinned_version" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.resetPinnedVersion"></a>

```python
def reset_pinned_version() -> None
```

##### `reset_string_config` <a name="reset_string_config" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.resetStringConfig"></a>

```python
def reset_string_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.extensionNameInput">extension_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.pinnedVersionInput">pinned_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.stringConfigInput">string_config_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.extensionName">extension_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.pinnedVersion">pinned_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.stringConfig">string_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies">GoogleComputeZoneVmExtensionPolicyExtensionPolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `extension_name_input`<sup>Optional</sup> <a name="extension_name_input" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.extensionNameInput"></a>

```python
extension_name_input: str
```

- *Type:* str

---

##### `pinned_version_input`<sup>Optional</sup> <a name="pinned_version_input" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.pinnedVersionInput"></a>

```python
pinned_version_input: str
```

- *Type:* str

---

##### `string_config_input`<sup>Optional</sup> <a name="string_config_input" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.stringConfigInput"></a>

```python
string_config_input: str
```

- *Type:* str

---

##### `extension_name`<sup>Required</sup> <a name="extension_name" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.extensionName"></a>

```python
extension_name: str
```

- *Type:* str

---

##### `pinned_version`<sup>Required</sup> <a name="pinned_version" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.pinnedVersion"></a>

```python
pinned_version: str
```

- *Type:* str

---

##### `string_config`<sup>Required</sup> <a name="string_config" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.stringConfig"></a>

```python
string_config: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleComputeZoneVmExtensionPolicyExtensionPolicies
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies">GoogleComputeZoneVmExtensionPolicyExtensionPolicies</a>

---


### GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference <a name="GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_zone_vm_extension_policy

googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.resetInclusionLabels">reset_inclusion_labels</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_inclusion_labels` <a name="reset_inclusion_labels" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.resetInclusionLabels"></a>

```python
def reset_inclusion_labels() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.inclusionLabelsInput">inclusion_labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.inclusionLabels">inclusion_labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector">GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `inclusion_labels_input`<sup>Optional</sup> <a name="inclusion_labels_input" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.inclusionLabelsInput"></a>

```python
inclusion_labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `inclusion_labels`<sup>Required</sup> <a name="inclusion_labels" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.inclusionLabels"></a>

```python
inclusion_labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector">GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector</a>

---


### GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList <a name="GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_zone_vm_extension_policy

googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors">GoogleComputeZoneVmExtensionPolicyInstanceSelectors</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleComputeZoneVmExtensionPolicyInstanceSelectors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors">GoogleComputeZoneVmExtensionPolicyInstanceSelectors</a>]

---


### GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference <a name="GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_zone_vm_extension_policy

googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.putLabelSelector">put_label_selector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.resetLabelSelector">reset_label_selector</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_label_selector` <a name="put_label_selector" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.putLabelSelector"></a>

```python
def put_label_selector(
  inclusion_labels: typing.Mapping[str] = None
) -> None
```

###### `inclusion_labels`<sup>Optional</sup> <a name="inclusion_labels" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.putLabelSelector.parameter.inclusionLabels"></a>

- *Type:* typing.Mapping[str]

A map of key-value pairs representing VM labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#inclusion_labels GoogleComputeZoneVmExtensionPolicy#inclusion_labels}

---

##### `reset_label_selector` <a name="reset_label_selector" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.resetLabelSelector"></a>

```python
def reset_label_selector() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.labelSelector">label_selector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference">GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.labelSelectorInput">label_selector_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector">GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors">GoogleComputeZoneVmExtensionPolicyInstanceSelectors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `label_selector`<sup>Required</sup> <a name="label_selector" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.labelSelector"></a>

```python
label_selector: GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference">GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference</a>

---

##### `label_selector_input`<sup>Optional</sup> <a name="label_selector_input" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.labelSelectorInput"></a>

```python
label_selector_input: GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector">GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleComputeZoneVmExtensionPolicyInstanceSelectors
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors">GoogleComputeZoneVmExtensionPolicyInstanceSelectors</a>

---


### GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference <a name="GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_zone_vm_extension_policy

googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts">GoogleComputeZoneVmExtensionPolicyTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleComputeZoneVmExtensionPolicyTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts">GoogleComputeZoneVmExtensionPolicyTimeouts</a>

---



