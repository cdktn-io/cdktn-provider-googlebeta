# `googleIamOrganizationAccessPolicy` Submodule <a name="`googleIamOrganizationAccessPolicy` Submodule" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIamOrganizationAccessPolicy <a name="GoogleIamOrganizationAccessPolicy" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy google_iam_organization_access_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.Initializer"></a>

```python
from cdktn_provider_google_beta import google_iam_organization_access_policy

googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  access_policy_id: str,
  location: str,
  organization: str,
  annotations: typing.Mapping[str] = None,
  deletion_policy: str = None,
  details: GoogleIamOrganizationAccessPolicyDetails = None,
  display_name: str = None,
  id: str = None,
  timeouts: GoogleIamOrganizationAccessPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.Initializer.parameter.accessPolicyId">access_policy_id</a></code> | <code>str</code> | The ID to use for the access policy, which will become the final component of the access policy's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.Initializer.parameter.organization">organization</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.Initializer.parameter.details">details</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetails">GoogleIamOrganizationAccessPolicyDetails</a></code> | details block. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The description of the access policy. Must be less than or equal to 63 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#id GoogleIamOrganizationAccessPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeouts">GoogleIamOrganizationAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_policy_id`<sup>Required</sup> <a name="access_policy_id" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.Initializer.parameter.accessPolicyId"></a>

- *Type:* str

The ID to use for the access policy, which will become the final component of the access policy's resource name.

This value must start with a lowercase letter followed by up to 62
lowercase letters, numbers, hyphens, or dots. Pattern,
/a-z{2,62}/.
This value must be unique among all access policies with the same parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#access_policy_id GoogleIamOrganizationAccessPolicy#access_policy_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#location GoogleIamOrganizationAccessPolicy#location}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.Initializer.parameter.organization"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#organization GoogleIamOrganizationAccessPolicy#organization}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#annotations GoogleIamOrganizationAccessPolicy#annotations}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#deletion_policy GoogleIamOrganizationAccessPolicy#deletion_policy}

---

##### `details`<sup>Optional</sup> <a name="details" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.Initializer.parameter.details"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetails">GoogleIamOrganizationAccessPolicyDetails</a>

details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#details GoogleIamOrganizationAccessPolicy#details}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.Initializer.parameter.displayName"></a>

- *Type:* str

The description of the access policy. Must be less than or equal to 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#display_name GoogleIamOrganizationAccessPolicy#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#id GoogleIamOrganizationAccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeouts">GoogleIamOrganizationAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#timeouts GoogleIamOrganizationAccessPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.putDetails">put_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.resetDetails">reset_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_details` <a name="put_details" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.putDetails"></a>

```python
def put_details(
  rules: IResolvable | typing.List[GoogleIamOrganizationAccessPolicyDetailsRules]
) -> None
```

###### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.putDetails.parameter.rules"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRules">GoogleIamOrganizationAccessPolicyDetailsRules</a>]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#rules GoogleIamOrganizationAccessPolicy#rules}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#create GoogleIamOrganizationAccessPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#delete GoogleIamOrganizationAccessPolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#update GoogleIamOrganizationAccessPolicy#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_details` <a name="reset_details" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.resetDetails"></a>

```python
def reset_details() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleIamOrganizationAccessPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_iam_organization_access_policy

googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_iam_organization_access_policy

googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_iam_organization_access_policy

googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_iam_organization_access_policy

googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleIamOrganizationAccessPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleIamOrganizationAccessPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleIamOrganizationAccessPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleIamOrganizationAccessPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.details">details</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference">GoogleIamOrganizationAccessPolicyDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference">GoogleIamOrganizationAccessPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.accessPolicyIdInput">access_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.detailsInput">details_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetails">GoogleIamOrganizationAccessPolicyDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeouts">GoogleIamOrganizationAccessPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.accessPolicyId">access_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.organization">organization</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.details"></a>

```python
details: GoogleIamOrganizationAccessPolicyDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference">GoogleIamOrganizationAccessPolicyDetailsOutputReference</a>

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.timeouts"></a>

```python
timeouts: GoogleIamOrganizationAccessPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference">GoogleIamOrganizationAccessPolicyTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `access_policy_id_input`<sup>Optional</sup> <a name="access_policy_id_input" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.accessPolicyIdInput"></a>

```python
access_policy_id_input: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `details_input`<sup>Optional</sup> <a name="details_input" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.detailsInput"></a>

```python
details_input: GoogleIamOrganizationAccessPolicyDetails
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetails">GoogleIamOrganizationAccessPolicyDetails</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleIamOrganizationAccessPolicyTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeouts">GoogleIamOrganizationAccessPolicyTimeouts</a>

---

##### `access_policy_id`<sup>Required</sup> <a name="access_policy_id" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.accessPolicyId"></a>

```python
access_policy_id: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIamOrganizationAccessPolicyConfig <a name="GoogleIamOrganizationAccessPolicyConfig" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_iam_organization_access_policy

googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  access_policy_id: str,
  location: str,
  organization: str,
  annotations: typing.Mapping[str] = None,
  deletion_policy: str = None,
  details: GoogleIamOrganizationAccessPolicyDetails = None,
  display_name: str = None,
  id: str = None,
  timeouts: GoogleIamOrganizationAccessPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.accessPolicyId">access_policy_id</a></code> | <code>str</code> | The ID to use for the access policy, which will become the final component of the access policy's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.organization">organization</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.details">details</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetails">GoogleIamOrganizationAccessPolicyDetails</a></code> | details block. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.displayName">display_name</a></code> | <code>str</code> | The description of the access policy. Must be less than or equal to 63 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#id GoogleIamOrganizationAccessPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeouts">GoogleIamOrganizationAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_policy_id`<sup>Required</sup> <a name="access_policy_id" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.accessPolicyId"></a>

```python
access_policy_id: str
```

- *Type:* str

The ID to use for the access policy, which will become the final component of the access policy's resource name.

This value must start with a lowercase letter followed by up to 62
lowercase letters, numbers, hyphens, or dots. Pattern,
/a-z{2,62}/.
This value must be unique among all access policies with the same parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#access_policy_id GoogleIamOrganizationAccessPolicy#access_policy_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#location GoogleIamOrganizationAccessPolicy#location}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.organization"></a>

```python
organization: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#organization GoogleIamOrganizationAccessPolicy#organization}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#annotations GoogleIamOrganizationAccessPolicy#annotations}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#deletion_policy GoogleIamOrganizationAccessPolicy#deletion_policy}

---

##### `details`<sup>Optional</sup> <a name="details" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.details"></a>

```python
details: GoogleIamOrganizationAccessPolicyDetails
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetails">GoogleIamOrganizationAccessPolicyDetails</a>

details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#details GoogleIamOrganizationAccessPolicy#details}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The description of the access policy. Must be less than or equal to 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#display_name GoogleIamOrganizationAccessPolicy#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#id GoogleIamOrganizationAccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.timeouts"></a>

```python
timeouts: GoogleIamOrganizationAccessPolicyTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeouts">GoogleIamOrganizationAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#timeouts GoogleIamOrganizationAccessPolicy#timeouts}

---

### GoogleIamOrganizationAccessPolicyDetails <a name="GoogleIamOrganizationAccessPolicyDetails" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetails.Initializer"></a>

```python
from cdktn_provider_google_beta import google_iam_organization_access_policy

googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetails(
  rules: IResolvable | typing.List[GoogleIamOrganizationAccessPolicyDetailsRules]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetails.property.rules">rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRules">GoogleIamOrganizationAccessPolicyDetailsRules</a>]</code> | rules block. |

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetails.property.rules"></a>

```python
rules: IResolvable | typing.List[GoogleIamOrganizationAccessPolicyDetailsRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRules">GoogleIamOrganizationAccessPolicyDetailsRules</a>]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#rules GoogleIamOrganizationAccessPolicy#rules}

---

### GoogleIamOrganizationAccessPolicyDetailsRules <a name="GoogleIamOrganizationAccessPolicyDetailsRules" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRules.Initializer"></a>

```python
from cdktn_provider_google_beta import google_iam_organization_access_policy

googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRules(
  effect: str,
  operation: GoogleIamOrganizationAccessPolicyDetailsRulesOperation,
  principals: typing.List[str],
  conditions: IResolvable | typing.List[GoogleIamOrganizationAccessPolicyDetailsRulesConditions] = None,
  description: str = None,
  excluded_principals: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRules.property.effect">effect</a></code> | <code>str</code> | The effect of the rule. Possible values: DENY ALLOW Possible values: ["DENY", "ALLOW"]. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRules.property.operation">operation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperation">GoogleIamOrganizationAccessPolicyDetailsRulesOperation</a></code> | operation block. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRules.property.principals">principals</a></code> | <code>typing.List[str]</code> | The identities for which this rule's effect governs using one or more permissions on Google Cloud resources. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRules.property.conditions">conditions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditions">GoogleIamOrganizationAccessPolicyDetailsRulesConditions</a>]</code> | conditions block. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRules.property.description">description</a></code> | <code>str</code> | Customer specified description of the rule. Must be less than or equal to 256 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRules.property.excludedPrincipals">excluded_principals</a></code> | <code>typing.List[str]</code> | The identities that are excluded from the access policy rule, even if they are listed in the 'principals'. |

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRules.property.effect"></a>

```python
effect: str
```

- *Type:* str

The effect of the rule. Possible values: DENY ALLOW Possible values: ["DENY", "ALLOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#effect GoogleIamOrganizationAccessPolicy#effect}

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRules.property.operation"></a>

```python
operation: GoogleIamOrganizationAccessPolicyDetailsRulesOperation
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperation">GoogleIamOrganizationAccessPolicyDetailsRulesOperation</a>

operation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#operation GoogleIamOrganizationAccessPolicy#operation}

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRules.property.principals"></a>

```python
principals: typing.List[str]
```

- *Type:* typing.List[str]

The identities for which this rule's effect governs using one or more permissions on Google Cloud resources.

This field can contain the
following values:

* 'principal://goog/subject/{email_id}': A specific Google Account.
  Includes Gmail, Cloud Identity, and Google Workspace user accounts. For
  example, 'principal://goog/subject/alice@example.com'.
* 'principal://iam.googleapis.com/projects/-/serviceAccounts/{service_account_id}':
  A Google Cloud service account. For example,
  'principal://iam.googleapis.com/projects/-/serviceAccounts/my-service-account@iam.gserviceaccount.com'.
* 'principalSet://goog/group/{group_id}': A Google group. For example,
  'principalSet://goog/group/admins@example.com'.
* 'principalSet://goog/cloudIdentityCustomerId/{customer_id}': All of the
  principals associated with the specified Google Workspace or Cloud
  Identity customer ID. For example,
  'principalSet://goog/cloudIdentityCustomerId/C01Abc35'.
  If an identifier that was previously set on a policy is soft deleted, then
  calls to read that policy will return the identifier with a deleted
  prefix. Users cannot set identifiers with this syntax.
* 'deleted:principal://goog/subject/{email_id}?uid={uid}': A specific
  Google Account that was deleted recently. For example,
  'deleted:principal://goog/subject/alice@example.com?uid=1234567890'. If
  the Google Account is recovered, this identifier reverts to the standard
  identifier for a Google Account.
* 'deleted:principalSet://goog/group/{group_id}?uid={uid}': A Google group
  that was deleted recently. For example,
  'deleted:principalSet://goog/group/admins@example.com?uid=1234567890'.
  If the Google group is restored, this identifier reverts to the standard
  identifier for a Google group.
* 'deleted:principal://iam.googleapis.com/projects/-/serviceAccounts/{service_account_id}?uid={uid}':
  A Google Cloud service account that was deleted recently. For example,
  'deleted:principal://iam.googleapis.com/projects/-/serviceAccounts/my-service-account@iam.gserviceaccount.com?uid=1234567890'.
  If the service account is undeleted, this identifier reverts to the
  standard identifier for a service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#principals GoogleIamOrganizationAccessPolicy#principals}

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRules.property.conditions"></a>

```python
conditions: IResolvable | typing.List[GoogleIamOrganizationAccessPolicyDetailsRulesConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditions">GoogleIamOrganizationAccessPolicyDetailsRulesConditions</a>]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#conditions GoogleIamOrganizationAccessPolicy#conditions}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRules.property.description"></a>

```python
description: str
```

- *Type:* str

Customer specified description of the rule. Must be less than or equal to 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#description GoogleIamOrganizationAccessPolicy#description}

---

##### `excluded_principals`<sup>Optional</sup> <a name="excluded_principals" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRules.property.excludedPrincipals"></a>

```python
excluded_principals: typing.List[str]
```

- *Type:* typing.List[str]

The identities that are excluded from the access policy rule, even if they are listed in the 'principals'.

For example, you could add a Google
group to the 'principals', then exclude specific users who belong to
that group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#excluded_principals GoogleIamOrganizationAccessPolicy#excluded_principals}

---

### GoogleIamOrganizationAccessPolicyDetailsRulesConditions <a name="GoogleIamOrganizationAccessPolicyDetailsRulesConditions" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditions.Initializer"></a>

```python
from cdktn_provider_google_beta import google_iam_organization_access_policy

googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditions(
  service: str,
  expression: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditions.property.service">service</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#service GoogleIamOrganizationAccessPolicy#service}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditions.property.expression">expression</a></code> | <code>str</code> | Textual representation of an expression in Common Expression Language syntax. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditions.property.service"></a>

```python
service: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#service GoogleIamOrganizationAccessPolicy#service}.

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditions.property.expression"></a>

```python
expression: str
```

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#expression GoogleIamOrganizationAccessPolicy#expression}

---

### GoogleIamOrganizationAccessPolicyDetailsRulesOperation <a name="GoogleIamOrganizationAccessPolicyDetailsRulesOperation" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperation.Initializer"></a>

```python
from cdktn_provider_google_beta import google_iam_organization_access_policy

googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperation(
  permissions: typing.List[str],
  excluded_permissions: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperation.property.permissions">permissions</a></code> | <code>typing.List[str]</code> | The permissions that are explicitly affected by this rule. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperation.property.excludedPermissions">excluded_permissions</a></code> | <code>typing.List[str]</code> | Specifies the permissions that this rule excludes from the set of affected permissions given by 'permissions'. |

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperation.property.permissions"></a>

```python
permissions: typing.List[str]
```

- *Type:* typing.List[str]

The permissions that are explicitly affected by this rule.

Each
permission uses the format '{service_fqdn}/{resource}.{verb}', where
'{service_fqdn}' is the fully qualified domain name for the service.
Currently supported permissions are as follows:

* 'eventarc.googleapis.com/messageBuses.publish'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#permissions GoogleIamOrganizationAccessPolicy#permissions}

---

##### `excluded_permissions`<sup>Optional</sup> <a name="excluded_permissions" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperation.property.excludedPermissions"></a>

```python
excluded_permissions: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the permissions that this rule excludes from the set of affected permissions given by 'permissions'.

If a permission appears in
'permissions' *and* in 'excluded_permissions' then it will *not* be
subject to the policy effect.
The excluded permissions can be specified using the same syntax as
'permissions'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#excluded_permissions GoogleIamOrganizationAccessPolicy#excluded_permissions}

---

### GoogleIamOrganizationAccessPolicyTimeouts <a name="GoogleIamOrganizationAccessPolicyTimeouts" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_iam_organization_access_policy

googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#create GoogleIamOrganizationAccessPolicy#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#delete GoogleIamOrganizationAccessPolicy#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#update GoogleIamOrganizationAccessPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#create GoogleIamOrganizationAccessPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#delete GoogleIamOrganizationAccessPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#update GoogleIamOrganizationAccessPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIamOrganizationAccessPolicyDetailsOutputReference <a name="GoogleIamOrganizationAccessPolicyDetailsOutputReference" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_iam_organization_access_policy

googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.putRules">put_rules</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rules` <a name="put_rules" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.putRules"></a>

```python
def put_rules(
  value: IResolvable | typing.List[GoogleIamOrganizationAccessPolicyDetailsRules]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.putRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRules">GoogleIamOrganizationAccessPolicyDetailsRules</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList">GoogleIamOrganizationAccessPolicyDetailsRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.property.rulesInput">rules_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRules">GoogleIamOrganizationAccessPolicyDetailsRules</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetails">GoogleIamOrganizationAccessPolicyDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.property.rules"></a>

```python
rules: GoogleIamOrganizationAccessPolicyDetailsRulesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList">GoogleIamOrganizationAccessPolicyDetailsRulesList</a>

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.property.rulesInput"></a>

```python
rules_input: IResolvable | typing.List[GoogleIamOrganizationAccessPolicyDetailsRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRules">GoogleIamOrganizationAccessPolicyDetailsRules</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleIamOrganizationAccessPolicyDetails
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetails">GoogleIamOrganizationAccessPolicyDetails</a>

---


### GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList <a name="GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_iam_organization_access_policy

googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditions">GoogleIamOrganizationAccessPolicyDetailsRulesConditions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleIamOrganizationAccessPolicyDetailsRulesConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditions">GoogleIamOrganizationAccessPolicyDetailsRulesConditions</a>]

---


### GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference <a name="GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_iam_organization_access_policy

googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.resetExpression">reset_expression</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_expression` <a name="reset_expression" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.resetExpression"></a>

```python
def reset_expression() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditions">GoogleIamOrganizationAccessPolicyDetailsRulesConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleIamOrganizationAccessPolicyDetailsRulesConditions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditions">GoogleIamOrganizationAccessPolicyDetailsRulesConditions</a>

---


### GoogleIamOrganizationAccessPolicyDetailsRulesList <a name="GoogleIamOrganizationAccessPolicyDetailsRulesList" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_iam_organization_access_policy

googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRules">GoogleIamOrganizationAccessPolicyDetailsRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleIamOrganizationAccessPolicyDetailsRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRules">GoogleIamOrganizationAccessPolicyDetailsRules</a>]

---


### GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference <a name="GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_iam_organization_access_policy

googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.resetExcludedPermissions">reset_excluded_permissions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_excluded_permissions` <a name="reset_excluded_permissions" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.resetExcludedPermissions"></a>

```python
def reset_excluded_permissions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.property.excludedPermissionsInput">excluded_permissions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.property.permissionsInput">permissions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.property.excludedPermissions">excluded_permissions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.property.permissions">permissions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperation">GoogleIamOrganizationAccessPolicyDetailsRulesOperation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `excluded_permissions_input`<sup>Optional</sup> <a name="excluded_permissions_input" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.property.excludedPermissionsInput"></a>

```python
excluded_permissions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `permissions_input`<sup>Optional</sup> <a name="permissions_input" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.property.permissionsInput"></a>

```python
permissions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `excluded_permissions`<sup>Required</sup> <a name="excluded_permissions" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.property.excludedPermissions"></a>

```python
excluded_permissions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.property.permissions"></a>

```python
permissions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleIamOrganizationAccessPolicyDetailsRulesOperation
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperation">GoogleIamOrganizationAccessPolicyDetailsRulesOperation</a>

---


### GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference <a name="GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_iam_organization_access_policy

googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.putConditions">put_conditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.putOperation">put_operation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.resetConditions">reset_conditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.resetExcludedPrincipals">reset_excluded_principals</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_conditions` <a name="put_conditions" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.putConditions"></a>

```python
def put_conditions(
  value: IResolvable | typing.List[GoogleIamOrganizationAccessPolicyDetailsRulesConditions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.putConditions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditions">GoogleIamOrganizationAccessPolicyDetailsRulesConditions</a>]

---

##### `put_operation` <a name="put_operation" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.putOperation"></a>

```python
def put_operation(
  permissions: typing.List[str],
  excluded_permissions: typing.List[str] = None
) -> None
```

###### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.putOperation.parameter.permissions"></a>

- *Type:* typing.List[str]

The permissions that are explicitly affected by this rule.

Each
permission uses the format '{service_fqdn}/{resource}.{verb}', where
'{service_fqdn}' is the fully qualified domain name for the service.
Currently supported permissions are as follows:

* 'eventarc.googleapis.com/messageBuses.publish'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#permissions GoogleIamOrganizationAccessPolicy#permissions}

---

###### `excluded_permissions`<sup>Optional</sup> <a name="excluded_permissions" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.putOperation.parameter.excludedPermissions"></a>

- *Type:* typing.List[str]

Specifies the permissions that this rule excludes from the set of affected permissions given by 'permissions'.

If a permission appears in
'permissions' *and* in 'excluded_permissions' then it will *not* be
subject to the policy effect.
The excluded permissions can be specified using the same syntax as
'permissions'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#excluded_permissions GoogleIamOrganizationAccessPolicy#excluded_permissions}

---

##### `reset_conditions` <a name="reset_conditions" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.resetConditions"></a>

```python
def reset_conditions() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_excluded_principals` <a name="reset_excluded_principals" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.resetExcludedPrincipals"></a>

```python
def reset_excluded_principals() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList">GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.operation">operation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference">GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.conditionsInput">conditions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditions">GoogleIamOrganizationAccessPolicyDetailsRulesConditions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.effectInput">effect_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.excludedPrincipalsInput">excluded_principals_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.operationInput">operation_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperation">GoogleIamOrganizationAccessPolicyDetailsRulesOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.principalsInput">principals_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.effect">effect</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.excludedPrincipals">excluded_principals</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.principals">principals</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRules">GoogleIamOrganizationAccessPolicyDetailsRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.conditions"></a>

```python
conditions: GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList">GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList</a>

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.operation"></a>

```python
operation: GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference">GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference</a>

---

##### `conditions_input`<sup>Optional</sup> <a name="conditions_input" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.conditionsInput"></a>

```python
conditions_input: IResolvable | typing.List[GoogleIamOrganizationAccessPolicyDetailsRulesConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditions">GoogleIamOrganizationAccessPolicyDetailsRulesConditions</a>]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `effect_input`<sup>Optional</sup> <a name="effect_input" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.effectInput"></a>

```python
effect_input: str
```

- *Type:* str

---

##### `excluded_principals_input`<sup>Optional</sup> <a name="excluded_principals_input" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.excludedPrincipalsInput"></a>

```python
excluded_principals_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `operation_input`<sup>Optional</sup> <a name="operation_input" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.operationInput"></a>

```python
operation_input: GoogleIamOrganizationAccessPolicyDetailsRulesOperation
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperation">GoogleIamOrganizationAccessPolicyDetailsRulesOperation</a>

---

##### `principals_input`<sup>Optional</sup> <a name="principals_input" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.principalsInput"></a>

```python
principals_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.effect"></a>

```python
effect: str
```

- *Type:* str

---

##### `excluded_principals`<sup>Required</sup> <a name="excluded_principals" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.excludedPrincipals"></a>

```python
excluded_principals: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.principals"></a>

```python
principals: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleIamOrganizationAccessPolicyDetailsRules
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRules">GoogleIamOrganizationAccessPolicyDetailsRules</a>

---


### GoogleIamOrganizationAccessPolicyTimeoutsOutputReference <a name="GoogleIamOrganizationAccessPolicyTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_iam_organization_access_policy

googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeouts">GoogleIamOrganizationAccessPolicyTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleIamOrganizationAccessPolicyTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeouts">GoogleIamOrganizationAccessPolicyTimeouts</a>

---



