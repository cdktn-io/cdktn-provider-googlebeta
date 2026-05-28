# `googleCloudSecurityComplianceFramework` Submodule <a name="`googleCloudSecurityComplianceFramework` Submodule" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudSecurityComplianceFramework <a name="GoogleCloudSecurityComplianceFramework" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework google_cloud_security_compliance_framework}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework

googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  framework_id: str,
  location: str,
  organization: str,
  cloud_control_details: IResolvable | typing.List[GoogleCloudSecurityComplianceFrameworkCloudControlDetails] = None,
  deletion_policy: str = None,
  description: str = None,
  display_name: str = None,
  id: str = None,
  timeouts: GoogleCloudSecurityComplianceFrameworkTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.Initializer.parameter.frameworkId">framework_id</a></code> | <code>str</code> | ID of the framework. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.Initializer.parameter.organization">organization</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.Initializer.parameter.cloudControlDetails">cloud_control_details</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetails">GoogleCloudSecurityComplianceFrameworkCloudControlDetails</a>]</code> | cloud_control_details block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the framework. The maximum length is 2000 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Display name of the framework. The maximum length is 200 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#id GoogleCloudSecurityComplianceFramework#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeouts">GoogleCloudSecurityComplianceFrameworkTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `framework_id`<sup>Required</sup> <a name="framework_id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.Initializer.parameter.frameworkId"></a>

- *Type:* str

ID of the framework.

This is not the full name of the framework.
This is the last part of the full name of the framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#framework_id GoogleCloudSecurityComplianceFramework#framework_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#location GoogleCloudSecurityComplianceFramework#location}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.Initializer.parameter.organization"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#organization GoogleCloudSecurityComplianceFramework#organization}

---

##### `cloud_control_details`<sup>Optional</sup> <a name="cloud_control_details" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.Initializer.parameter.cloudControlDetails"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetails">GoogleCloudSecurityComplianceFrameworkCloudControlDetails</a>]

cloud_control_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#cloud_control_details GoogleCloudSecurityComplianceFramework#cloud_control_details}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#deletion_policy GoogleCloudSecurityComplianceFramework#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.Initializer.parameter.description"></a>

- *Type:* str

The description of the framework. The maximum length is 2000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#description GoogleCloudSecurityComplianceFramework#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.Initializer.parameter.displayName"></a>

- *Type:* str

Display name of the framework. The maximum length is 200 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#display_name GoogleCloudSecurityComplianceFramework#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#id GoogleCloudSecurityComplianceFramework#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeouts">GoogleCloudSecurityComplianceFrameworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#timeouts GoogleCloudSecurityComplianceFramework#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.putCloudControlDetails">put_cloud_control_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.resetCloudControlDetails">reset_cloud_control_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_cloud_control_details` <a name="put_cloud_control_details" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.putCloudControlDetails"></a>

```python
def put_cloud_control_details(
  value: IResolvable | typing.List[GoogleCloudSecurityComplianceFrameworkCloudControlDetails]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.putCloudControlDetails.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetails">GoogleCloudSecurityComplianceFrameworkCloudControlDetails</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#create GoogleCloudSecurityComplianceFramework#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#delete GoogleCloudSecurityComplianceFramework#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#update GoogleCloudSecurityComplianceFramework#update}.

---

##### `reset_cloud_control_details` <a name="reset_cloud_control_details" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.resetCloudControlDetails"></a>

```python
def reset_cloud_control_details() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleCloudSecurityComplianceFramework resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework

googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework

googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework

googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework

googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleCloudSecurityComplianceFramework resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleCloudSecurityComplianceFramework to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleCloudSecurityComplianceFramework that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCloudSecurityComplianceFramework to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.category">category</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.cloudControlDetails">cloud_control_details</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.majorRevisionId">major_revision_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.supportedCloudProviders">supported_cloud_providers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.supportedEnforcementModes">supported_enforcement_modes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.supportedTargetResourceTypes">supported_target_resource_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference">GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.cloudControlDetailsInput">cloud_control_details_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetails">GoogleCloudSecurityComplianceFrameworkCloudControlDetails</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.frameworkIdInput">framework_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeouts">GoogleCloudSecurityComplianceFrameworkTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.frameworkId">framework_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.organization">organization</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.category"></a>

```python
category: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cloud_control_details`<sup>Required</sup> <a name="cloud_control_details" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.cloudControlDetails"></a>

```python
cloud_control_details: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList</a>

---

##### `major_revision_id`<sup>Required</sup> <a name="major_revision_id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.majorRevisionId"></a>

```python
major_revision_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `supported_cloud_providers`<sup>Required</sup> <a name="supported_cloud_providers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.supportedCloudProviders"></a>

```python
supported_cloud_providers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `supported_enforcement_modes`<sup>Required</sup> <a name="supported_enforcement_modes" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.supportedEnforcementModes"></a>

```python
supported_enforcement_modes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `supported_target_resource_types`<sup>Required</sup> <a name="supported_target_resource_types" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.supportedTargetResourceTypes"></a>

```python
supported_target_resource_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.timeouts"></a>

```python
timeouts: GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference">GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `cloud_control_details_input`<sup>Optional</sup> <a name="cloud_control_details_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.cloudControlDetailsInput"></a>

```python
cloud_control_details_input: IResolvable | typing.List[GoogleCloudSecurityComplianceFrameworkCloudControlDetails]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetails">GoogleCloudSecurityComplianceFrameworkCloudControlDetails</a>]

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `framework_id_input`<sup>Optional</sup> <a name="framework_id_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.frameworkIdInput"></a>

```python
framework_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleCloudSecurityComplianceFrameworkTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeouts">GoogleCloudSecurityComplianceFrameworkTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `framework_id`<sup>Required</sup> <a name="framework_id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.frameworkId"></a>

```python
framework_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudSecurityComplianceFrameworkCloudControlDetails <a name="GoogleCloudSecurityComplianceFrameworkCloudControlDetails" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetails.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework

googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetails(
  major_revision_id: str,
  name: str,
  parameters: IResolvable | typing.List[GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetails.property.majorRevisionId">major_revision_id</a></code> | <code>str</code> | Major revision of cloudcontrol. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetails.property.name">name</a></code> | <code>str</code> | The name of the CloudControl in the format: “organizations/{organization}/locations/{location}/cloudControls/{cloud-control}”. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetails.property.parameters">parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters</a>]</code> | parameters block. |

---

##### `major_revision_id`<sup>Required</sup> <a name="major_revision_id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetails.property.majorRevisionId"></a>

```python
major_revision_id: str
```

- *Type:* str

Major revision of cloudcontrol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#major_revision_id GoogleCloudSecurityComplianceFramework#major_revision_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetails.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the CloudControl in the format: “organizations/{organization}/locations/{location}/cloudControls/{cloud-control}”.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#name GoogleCloudSecurityComplianceFramework#name}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetails.property.parameters"></a>

```python
parameters: IResolvable | typing.List[GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters</a>]

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#parameters GoogleCloudSecurityComplianceFramework#parameters}

---

### GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters <a name="GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework

googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters(
  name: str,
  parameter_value: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters.property.name">name</a></code> | <code>str</code> | The name of the parameter. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters.property.parameterValue">parameter_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue</a></code> | parameter_value block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#name GoogleCloudSecurityComplianceFramework#name}

---

##### `parameter_value`<sup>Required</sup> <a name="parameter_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters.property.parameterValue"></a>

```python
parameter_value: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue</a>

parameter_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#parameter_value GoogleCloudSecurityComplianceFramework#parameter_value}

---

### GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue <a name="GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework

googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue(
  bool_value: bool | IResolvable = None,
  number_value: typing.Union[int, float] = None,
  oneof_value: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue = None,
  string_list_value: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue = None,
  string_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.property.boolValue">bool_value</a></code> | <code>bool \| cdktn.IResolvable</code> | Represents a boolean value. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.property.numberValue">number_value</a></code> | <code>typing.Union[int, float]</code> | Represents a double value. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.property.oneofValue">oneof_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue</a></code> | oneof_value block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.property.stringListValue">string_list_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue</a></code> | string_list_value block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.property.stringValue">string_value</a></code> | <code>str</code> | Represents a string value. |

---

##### `bool_value`<sup>Optional</sup> <a name="bool_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.property.boolValue"></a>

```python
bool_value: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Represents a boolean value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#bool_value GoogleCloudSecurityComplianceFramework#bool_value}

---

##### `number_value`<sup>Optional</sup> <a name="number_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.property.numberValue"></a>

```python
number_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Represents a double value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#number_value GoogleCloudSecurityComplianceFramework#number_value}

---

##### `oneof_value`<sup>Optional</sup> <a name="oneof_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.property.oneofValue"></a>

```python
oneof_value: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue</a>

oneof_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#oneof_value GoogleCloudSecurityComplianceFramework#oneof_value}

---

##### `string_list_value`<sup>Optional</sup> <a name="string_list_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.property.stringListValue"></a>

```python
string_list_value: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue</a>

string_list_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#string_list_value GoogleCloudSecurityComplianceFramework#string_list_value}

---

##### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

Represents a string value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#string_value GoogleCloudSecurityComplianceFramework#string_value}

---

### GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue <a name="GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework

googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue(
  name: str = None,
  parameter_value: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue.property.name">name</a></code> | <code>str</code> | The name of the parameter. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue.property.parameterValue">parameter_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue</a></code> | parameter_value block. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#name GoogleCloudSecurityComplianceFramework#name}

---

##### `parameter_value`<sup>Optional</sup> <a name="parameter_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue.property.parameterValue"></a>

```python
parameter_value: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue</a>

parameter_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#parameter_value GoogleCloudSecurityComplianceFramework#parameter_value}

---

### GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue <a name="GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework

googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue(
  bool_value: bool | IResolvable = None,
  number_value: typing.Union[int, float] = None,
  string_list_value: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue = None,
  string_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.boolValue">bool_value</a></code> | <code>bool \| cdktn.IResolvable</code> | Represents a boolean value. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.numberValue">number_value</a></code> | <code>typing.Union[int, float]</code> | Represents a double value. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.stringListValue">string_list_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a></code> | string_list_value block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.stringValue">string_value</a></code> | <code>str</code> | Represents a string value. |

---

##### `bool_value`<sup>Optional</sup> <a name="bool_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.boolValue"></a>

```python
bool_value: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Represents a boolean value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#bool_value GoogleCloudSecurityComplianceFramework#bool_value}

---

##### `number_value`<sup>Optional</sup> <a name="number_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.numberValue"></a>

```python
number_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Represents a double value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#number_value GoogleCloudSecurityComplianceFramework#number_value}

---

##### `string_list_value`<sup>Optional</sup> <a name="string_list_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.stringListValue"></a>

```python
string_list_value: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a>

string_list_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#string_list_value GoogleCloudSecurityComplianceFramework#string_list_value}

---

##### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

Represents a string value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#string_value GoogleCloudSecurityComplianceFramework#string_value}

---

### GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue <a name="GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework

googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue(
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue.property.values">values</a></code> | <code>typing.List[str]</code> | The strings in the list. |

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

The strings in the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#values GoogleCloudSecurityComplianceFramework#values}

---

### GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue <a name="GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework

googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue(
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue.property.values">values</a></code> | <code>typing.List[str]</code> | The strings in the list. |

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

The strings in the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#values GoogleCloudSecurityComplianceFramework#values}

---

### GoogleCloudSecurityComplianceFrameworkConfig <a name="GoogleCloudSecurityComplianceFrameworkConfig" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework

googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  framework_id: str,
  location: str,
  organization: str,
  cloud_control_details: IResolvable | typing.List[GoogleCloudSecurityComplianceFrameworkCloudControlDetails] = None,
  deletion_policy: str = None,
  description: str = None,
  display_name: str = None,
  id: str = None,
  timeouts: GoogleCloudSecurityComplianceFrameworkTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.frameworkId">framework_id</a></code> | <code>str</code> | ID of the framework. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.organization">organization</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.cloudControlDetails">cloud_control_details</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetails">GoogleCloudSecurityComplianceFrameworkCloudControlDetails</a>]</code> | cloud_control_details block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.description">description</a></code> | <code>str</code> | The description of the framework. The maximum length is 2000 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.displayName">display_name</a></code> | <code>str</code> | Display name of the framework. The maximum length is 200 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#id GoogleCloudSecurityComplianceFramework#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeouts">GoogleCloudSecurityComplianceFrameworkTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `framework_id`<sup>Required</sup> <a name="framework_id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.frameworkId"></a>

```python
framework_id: str
```

- *Type:* str

ID of the framework.

This is not the full name of the framework.
This is the last part of the full name of the framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#framework_id GoogleCloudSecurityComplianceFramework#framework_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#location GoogleCloudSecurityComplianceFramework#location}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.organization"></a>

```python
organization: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#organization GoogleCloudSecurityComplianceFramework#organization}

---

##### `cloud_control_details`<sup>Optional</sup> <a name="cloud_control_details" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.cloudControlDetails"></a>

```python
cloud_control_details: IResolvable | typing.List[GoogleCloudSecurityComplianceFrameworkCloudControlDetails]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetails">GoogleCloudSecurityComplianceFrameworkCloudControlDetails</a>]

cloud_control_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#cloud_control_details GoogleCloudSecurityComplianceFramework#cloud_control_details}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#deletion_policy GoogleCloudSecurityComplianceFramework#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the framework. The maximum length is 2000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#description GoogleCloudSecurityComplianceFramework#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Display name of the framework. The maximum length is 200 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#display_name GoogleCloudSecurityComplianceFramework#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#id GoogleCloudSecurityComplianceFramework#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.timeouts"></a>

```python
timeouts: GoogleCloudSecurityComplianceFrameworkTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeouts">GoogleCloudSecurityComplianceFrameworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#timeouts GoogleCloudSecurityComplianceFramework#timeouts}

---

### GoogleCloudSecurityComplianceFrameworkTimeouts <a name="GoogleCloudSecurityComplianceFrameworkTimeouts" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework

googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#create GoogleCloudSecurityComplianceFramework#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#delete GoogleCloudSecurityComplianceFramework#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#update GoogleCloudSecurityComplianceFramework#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#create GoogleCloudSecurityComplianceFramework#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#delete GoogleCloudSecurityComplianceFramework#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#update GoogleCloudSecurityComplianceFramework#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList <a name="GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework

googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetails">GoogleCloudSecurityComplianceFrameworkCloudControlDetails</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleCloudSecurityComplianceFrameworkCloudControlDetails]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetails">GoogleCloudSecurityComplianceFrameworkCloudControlDetails</a>]

---


### GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference <a name="GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework

googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.putParameters">put_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_parameters` <a name="put_parameters" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.putParameters"></a>

```python
def put_parameters(
  value: IResolvable | typing.List[GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.putParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters</a>]

---

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.majorRevisionIdInput">major_revision_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.parametersInput">parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.majorRevisionId">major_revision_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetails">GoogleCloudSecurityComplianceFrameworkCloudControlDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.parameters"></a>

```python
parameters: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList</a>

---

##### `major_revision_id_input`<sup>Optional</sup> <a name="major_revision_id_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.majorRevisionIdInput"></a>

```python
major_revision_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.parametersInput"></a>

```python
parameters_input: IResolvable | typing.List[GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters</a>]

---

##### `major_revision_id`<sup>Required</sup> <a name="major_revision_id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.majorRevisionId"></a>

```python
major_revision_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleCloudSecurityComplianceFrameworkCloudControlDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetails">GoogleCloudSecurityComplianceFrameworkCloudControlDetails</a>

---


### GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList <a name="GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework

googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters</a>]

---


### GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference <a name="GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework

googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.putParameterValue">put_parameter_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_parameter_value` <a name="put_parameter_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.putParameterValue"></a>

```python
def put_parameter_value(
  bool_value: bool | IResolvable = None,
  number_value: typing.Union[int, float] = None,
  oneof_value: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue = None,
  string_list_value: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue = None,
  string_value: str = None
) -> None
```

###### `bool_value`<sup>Optional</sup> <a name="bool_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.putParameterValue.parameter.boolValue"></a>

- *Type:* bool | cdktn.IResolvable

Represents a boolean value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#bool_value GoogleCloudSecurityComplianceFramework#bool_value}

---

###### `number_value`<sup>Optional</sup> <a name="number_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.putParameterValue.parameter.numberValue"></a>

- *Type:* typing.Union[int, float]

Represents a double value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#number_value GoogleCloudSecurityComplianceFramework#number_value}

---

###### `oneof_value`<sup>Optional</sup> <a name="oneof_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.putParameterValue.parameter.oneofValue"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue</a>

oneof_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#oneof_value GoogleCloudSecurityComplianceFramework#oneof_value}

---

###### `string_list_value`<sup>Optional</sup> <a name="string_list_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.putParameterValue.parameter.stringListValue"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue</a>

string_list_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#string_list_value GoogleCloudSecurityComplianceFramework#string_list_value}

---

###### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.putParameterValue.parameter.stringValue"></a>

- *Type:* str

Represents a string value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#string_value GoogleCloudSecurityComplianceFramework#string_value}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.parameterValue">parameter_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.parameterValueInput">parameter_value_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameter_value`<sup>Required</sup> <a name="parameter_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.parameterValue"></a>

```python
parameter_value: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameter_value_input`<sup>Optional</sup> <a name="parameter_value_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.parameterValueInput"></a>

```python
parameter_value_input: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters</a>

---


### GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference <a name="GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework

googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.putParameterValue">put_parameter_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.resetParameterValue">reset_parameter_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_parameter_value` <a name="put_parameter_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.putParameterValue"></a>

```python
def put_parameter_value(
  bool_value: bool | IResolvable = None,
  number_value: typing.Union[int, float] = None,
  string_list_value: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue = None,
  string_value: str = None
) -> None
```

###### `bool_value`<sup>Optional</sup> <a name="bool_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.putParameterValue.parameter.boolValue"></a>

- *Type:* bool | cdktn.IResolvable

Represents a boolean value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#bool_value GoogleCloudSecurityComplianceFramework#bool_value}

---

###### `number_value`<sup>Optional</sup> <a name="number_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.putParameterValue.parameter.numberValue"></a>

- *Type:* typing.Union[int, float]

Represents a double value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#number_value GoogleCloudSecurityComplianceFramework#number_value}

---

###### `string_list_value`<sup>Optional</sup> <a name="string_list_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.putParameterValue.parameter.stringListValue"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a>

string_list_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#string_list_value GoogleCloudSecurityComplianceFramework#string_list_value}

---

###### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.putParameterValue.parameter.stringValue"></a>

- *Type:* str

Represents a string value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#string_value GoogleCloudSecurityComplianceFramework#string_value}

---

##### `reset_name` <a name="reset_name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_parameter_value` <a name="reset_parameter_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.resetParameterValue"></a>

```python
def reset_parameter_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.parameterValue">parameter_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.parameterValueInput">parameter_value_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameter_value`<sup>Required</sup> <a name="parameter_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.parameterValue"></a>

```python
parameter_value: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameter_value_input`<sup>Optional</sup> <a name="parameter_value_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.parameterValueInput"></a>

```python
parameter_value_input: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue</a>

---


### GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference <a name="GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework

googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.putStringListValue">put_string_list_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetBoolValue">reset_bool_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetNumberValue">reset_number_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetStringListValue">reset_string_list_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetStringValue">reset_string_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_string_list_value` <a name="put_string_list_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.putStringListValue"></a>

```python
def put_string_list_value(
  values: typing.List[str]
) -> None
```

###### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.putStringListValue.parameter.values"></a>

- *Type:* typing.List[str]

The strings in the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#values GoogleCloudSecurityComplianceFramework#values}

---

##### `reset_bool_value` <a name="reset_bool_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetBoolValue"></a>

```python
def reset_bool_value() -> None
```

##### `reset_number_value` <a name="reset_number_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetNumberValue"></a>

```python
def reset_number_value() -> None
```

##### `reset_string_list_value` <a name="reset_string_list_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetStringListValue"></a>

```python
def reset_string_list_value() -> None
```

##### `reset_string_value` <a name="reset_string_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetStringValue"></a>

```python
def reset_string_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringListValue">string_list_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.boolValueInput">bool_value_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.numberValueInput">number_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringListValueInput">string_list_value_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringValueInput">string_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.boolValue">bool_value</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.numberValue">number_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `string_list_value`<sup>Required</sup> <a name="string_list_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringListValue"></a>

```python
string_list_value: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference</a>

---

##### `bool_value_input`<sup>Optional</sup> <a name="bool_value_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.boolValueInput"></a>

```python
bool_value_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `number_value_input`<sup>Optional</sup> <a name="number_value_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.numberValueInput"></a>

```python
number_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `string_list_value_input`<sup>Optional</sup> <a name="string_list_value_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringListValueInput"></a>

```python
string_list_value_input: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a>

---

##### `string_value_input`<sup>Optional</sup> <a name="string_value_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringValueInput"></a>

```python
string_value_input: str
```

- *Type:* str

---

##### `bool_value`<sup>Required</sup> <a name="bool_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.boolValue"></a>

```python
bool_value: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `number_value`<sup>Required</sup> <a name="number_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.numberValue"></a>

```python
number_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue</a>

---


### GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference <a name="GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework

googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a>

---


### GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference <a name="GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework

googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.putOneofValue">put_oneof_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.putStringListValue">put_string_list_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resetBoolValue">reset_bool_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resetNumberValue">reset_number_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resetOneofValue">reset_oneof_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resetStringListValue">reset_string_list_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resetStringValue">reset_string_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_oneof_value` <a name="put_oneof_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.putOneofValue"></a>

```python
def put_oneof_value(
  name: str = None,
  parameter_value: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.putOneofValue.parameter.name"></a>

- *Type:* str

The name of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#name GoogleCloudSecurityComplianceFramework#name}

---

###### `parameter_value`<sup>Optional</sup> <a name="parameter_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.putOneofValue.parameter.parameterValue"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue</a>

parameter_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#parameter_value GoogleCloudSecurityComplianceFramework#parameter_value}

---

##### `put_string_list_value` <a name="put_string_list_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.putStringListValue"></a>

```python
def put_string_list_value(
  values: typing.List[str]
) -> None
```

###### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.putStringListValue.parameter.values"></a>

- *Type:* typing.List[str]

The strings in the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework#values GoogleCloudSecurityComplianceFramework#values}

---

##### `reset_bool_value` <a name="reset_bool_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resetBoolValue"></a>

```python
def reset_bool_value() -> None
```

##### `reset_number_value` <a name="reset_number_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resetNumberValue"></a>

```python
def reset_number_value() -> None
```

##### `reset_oneof_value` <a name="reset_oneof_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resetOneofValue"></a>

```python
def reset_oneof_value() -> None
```

##### `reset_string_list_value` <a name="reset_string_list_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resetStringListValue"></a>

```python
def reset_string_list_value() -> None
```

##### `reset_string_value` <a name="reset_string_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resetStringValue"></a>

```python
def reset_string_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.oneofValue">oneof_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.stringListValue">string_list_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.boolValueInput">bool_value_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.numberValueInput">number_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.oneofValueInput">oneof_value_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.stringListValueInput">string_list_value_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.stringValueInput">string_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.boolValue">bool_value</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.numberValue">number_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `oneof_value`<sup>Required</sup> <a name="oneof_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.oneofValue"></a>

```python
oneof_value: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference</a>

---

##### `string_list_value`<sup>Required</sup> <a name="string_list_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.stringListValue"></a>

```python
string_list_value: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference</a>

---

##### `bool_value_input`<sup>Optional</sup> <a name="bool_value_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.boolValueInput"></a>

```python
bool_value_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `number_value_input`<sup>Optional</sup> <a name="number_value_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.numberValueInput"></a>

```python
number_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `oneof_value_input`<sup>Optional</sup> <a name="oneof_value_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.oneofValueInput"></a>

```python
oneof_value_input: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue</a>

---

##### `string_list_value_input`<sup>Optional</sup> <a name="string_list_value_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.stringListValueInput"></a>

```python
string_list_value_input: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue</a>

---

##### `string_value_input`<sup>Optional</sup> <a name="string_value_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.stringValueInput"></a>

```python
string_value_input: str
```

- *Type:* str

---

##### `bool_value`<sup>Required</sup> <a name="bool_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.boolValue"></a>

```python
bool_value: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `number_value`<sup>Required</sup> <a name="number_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.numberValue"></a>

```python
number_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue</a>

---


### GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference <a name="GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework

googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue</a>

---


### GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference <a name="GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework

googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeouts">GoogleCloudSecurityComplianceFrameworkTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleCloudSecurityComplianceFrameworkTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeouts">GoogleCloudSecurityComplianceFrameworkTimeouts</a>

---



