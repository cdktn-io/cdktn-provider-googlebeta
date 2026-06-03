# `googleComputeOrganizationSecurityPolicy` Submodule <a name="`googleComputeOrganizationSecurityPolicy` Submodule" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeOrganizationSecurityPolicy <a name="GoogleComputeOrganizationSecurityPolicy" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy google_compute_organization_security_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_organization_security_policy

googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  parent: str,
  advanced_options_config: GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig = None,
  deletion_policy: str = None,
  description: str = None,
  display_name: str = None,
  id: str = None,
  short_name: str = None,
  timeouts: GoogleComputeOrganizationSecurityPolicyTimeouts = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The parent of this OrganizationSecurityPolicy in the Cloud Resource Hierarchy. Format: organizations/{organization_id} or folders/{folder_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.Initializer.parameter.advancedOptionsConfig">advanced_options_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig">GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig</a></code> | advanced_options_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.Initializer.parameter.description">description</a></code> | <code>str</code> | A textual description for the organization security policy. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | User-provided name of the organization security policy. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#id GoogleComputeOrganizationSecurityPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.Initializer.parameter.shortName">short_name</a></code> | <code>str</code> | User-provided name of the organization security policy. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeouts">GoogleComputeOrganizationSecurityPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.Initializer.parameter.type">type</a></code> | <code>str</code> | The type indicates the intended use of the security policy. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.Initializer.parameter.parent"></a>

- *Type:* str

The parent of this OrganizationSecurityPolicy in the Cloud Resource Hierarchy. Format: organizations/{organization_id} or folders/{folder_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#parent GoogleComputeOrganizationSecurityPolicy#parent}

---

##### `advanced_options_config`<sup>Optional</sup> <a name="advanced_options_config" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.Initializer.parameter.advancedOptionsConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig">GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig</a>

advanced_options_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#advanced_options_config GoogleComputeOrganizationSecurityPolicy#advanced_options_config}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#deletion_policy GoogleComputeOrganizationSecurityPolicy#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.Initializer.parameter.description"></a>

- *Type:* str

A textual description for the organization security policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#description GoogleComputeOrganizationSecurityPolicy#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.Initializer.parameter.displayName"></a>

- *Type:* str

User-provided name of the organization security policy.

The name should be unique in the organization in which the security policy is created. This should only be used when SecurityPolicyType is FIREWALL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#display_name GoogleComputeOrganizationSecurityPolicy#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#id GoogleComputeOrganizationSecurityPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `short_name`<sup>Optional</sup> <a name="short_name" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.Initializer.parameter.shortName"></a>

- *Type:* str

User-provided name of the organization security policy.

The name should be unique in the organization in which the security policy is created. This should only be used when SecurityPolicyType is CLOUD_ARMOR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#short_name GoogleComputeOrganizationSecurityPolicy#short_name}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeouts">GoogleComputeOrganizationSecurityPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#timeouts GoogleComputeOrganizationSecurityPolicy#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.Initializer.parameter.type"></a>

- *Type:* str

The type indicates the intended use of the security policy.

This field can be set only at resource creation time.

**NOTE** : 'FIREWALL' type is deprecated and will be removed in a future major release. Please use 'google_compute_firewall_policy' instead." Possible values: ["FIREWALL", "CLOUD_ARMOR", "CLOUD_ARMOR_EDGE", "CLOUD_ARMOR_INTERNAL_SERVICE", "CLOUD_ARMOR_NETWORK"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#type GoogleComputeOrganizationSecurityPolicy#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.putAdvancedOptionsConfig">put_advanced_options_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.resetAdvancedOptionsConfig">reset_advanced_options_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.resetShortName">reset_short_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_advanced_options_config` <a name="put_advanced_options_config" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.putAdvancedOptionsConfig"></a>

```python
def put_advanced_options_config(
  json_custom_config: GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig = None,
  json_parsing: str = None,
  log_level: str = None,
  request_body_inspection_size: str = None,
  user_ip_request_headers: typing.List[str] = None
) -> None
```

###### `json_custom_config`<sup>Optional</sup> <a name="json_custom_config" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.putAdvancedOptionsConfig.parameter.jsonCustomConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a>

json_custom_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#json_custom_config GoogleComputeOrganizationSecurityPolicy#json_custom_config}

---

###### `json_parsing`<sup>Optional</sup> <a name="json_parsing" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.putAdvancedOptionsConfig.parameter.jsonParsing"></a>

- *Type:* str

JSON body parsing. Supported values include: "DISABLED", "STANDARD", "STANDARD_WITH_GRAPHQL". Possible values: ["DISABLED", "STANDARD", "STANDARD_WITH_GRAPHQL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#json_parsing GoogleComputeOrganizationSecurityPolicy#json_parsing}

---

###### `log_level`<sup>Optional</sup> <a name="log_level" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.putAdvancedOptionsConfig.parameter.logLevel"></a>

- *Type:* str

Logging level. Supported values include: "NORMAL", "VERBOSE". Possible values: ["NORMAL", "VERBOSE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#log_level GoogleComputeOrganizationSecurityPolicy#log_level}

---

###### `request_body_inspection_size`<sup>Optional</sup> <a name="request_body_inspection_size" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.putAdvancedOptionsConfig.parameter.requestBodyInspectionSize"></a>

- *Type:* str

The maximum request size chosen by the customer with Waf enabled.

Values supported are "8KB", "16KB", "32KB", "48KB" and "64KB".
Values are case insensitive. Possible values: ["8KB", "16KB", "32KB", "48KB", "64KB"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#request_body_inspection_size GoogleComputeOrganizationSecurityPolicy#request_body_inspection_size}

---

###### `user_ip_request_headers`<sup>Optional</sup> <a name="user_ip_request_headers" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.putAdvancedOptionsConfig.parameter.userIpRequestHeaders"></a>

- *Type:* typing.List[str]

An optional list of case-insensitive request header names to use for resolving the client source IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#user_ip_request_headers GoogleComputeOrganizationSecurityPolicy#user_ip_request_headers}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#create GoogleComputeOrganizationSecurityPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#delete GoogleComputeOrganizationSecurityPolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#update GoogleComputeOrganizationSecurityPolicy#update}.

---

##### `reset_advanced_options_config` <a name="reset_advanced_options_config" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.resetAdvancedOptionsConfig"></a>

```python
def reset_advanced_options_config() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_short_name` <a name="reset_short_name" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.resetShortName"></a>

```python
def reset_short_name() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleComputeOrganizationSecurityPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_compute_organization_security_policy

googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_compute_organization_security_policy

googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_compute_organization_security_policy

googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_compute_organization_security_policy

googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleComputeOrganizationSecurityPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleComputeOrganizationSecurityPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleComputeOrganizationSecurityPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeOrganizationSecurityPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.advancedOptionsConfig">advanced_options_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference">GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.fingerprint">fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference">GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.advancedOptionsConfigInput">advanced_options_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig">GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.shortNameInput">short_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeouts">GoogleComputeOrganizationSecurityPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.shortName">short_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `advanced_options_config`<sup>Required</sup> <a name="advanced_options_config" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.advancedOptionsConfig"></a>

```python
advanced_options_config: GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference">GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference</a>

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.timeouts"></a>

```python
timeouts: GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference">GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference</a>

---

##### `advanced_options_config_input`<sup>Optional</sup> <a name="advanced_options_config_input" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.advancedOptionsConfigInput"></a>

```python
advanced_options_config_input: GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig">GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `short_name_input`<sup>Optional</sup> <a name="short_name_input" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.shortNameInput"></a>

```python
short_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleComputeOrganizationSecurityPolicyTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeouts">GoogleComputeOrganizationSecurityPolicyTimeouts</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `short_name`<sup>Required</sup> <a name="short_name" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.shortName"></a>

```python
short_name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig <a name="GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_organization_security_policy

googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig(
  json_custom_config: GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig = None,
  json_parsing: str = None,
  log_level: str = None,
  request_body_inspection_size: str = None,
  user_ip_request_headers: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig.property.jsonCustomConfig">json_custom_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a></code> | json_custom_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig.property.jsonParsing">json_parsing</a></code> | <code>str</code> | JSON body parsing. Supported values include: "DISABLED", "STANDARD", "STANDARD_WITH_GRAPHQL". Possible values: ["DISABLED", "STANDARD", "STANDARD_WITH_GRAPHQL"]. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig.property.logLevel">log_level</a></code> | <code>str</code> | Logging level. Supported values include: "NORMAL", "VERBOSE". Possible values: ["NORMAL", "VERBOSE"]. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig.property.requestBodyInspectionSize">request_body_inspection_size</a></code> | <code>str</code> | The maximum request size chosen by the customer with Waf enabled. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig.property.userIpRequestHeaders">user_ip_request_headers</a></code> | <code>typing.List[str]</code> | An optional list of case-insensitive request header names to use for resolving the client source IP address. |

---

##### `json_custom_config`<sup>Optional</sup> <a name="json_custom_config" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig.property.jsonCustomConfig"></a>

```python
json_custom_config: GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a>

json_custom_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#json_custom_config GoogleComputeOrganizationSecurityPolicy#json_custom_config}

---

##### `json_parsing`<sup>Optional</sup> <a name="json_parsing" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig.property.jsonParsing"></a>

```python
json_parsing: str
```

- *Type:* str

JSON body parsing. Supported values include: "DISABLED", "STANDARD", "STANDARD_WITH_GRAPHQL". Possible values: ["DISABLED", "STANDARD", "STANDARD_WITH_GRAPHQL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#json_parsing GoogleComputeOrganizationSecurityPolicy#json_parsing}

---

##### `log_level`<sup>Optional</sup> <a name="log_level" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

Logging level. Supported values include: "NORMAL", "VERBOSE". Possible values: ["NORMAL", "VERBOSE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#log_level GoogleComputeOrganizationSecurityPolicy#log_level}

---

##### `request_body_inspection_size`<sup>Optional</sup> <a name="request_body_inspection_size" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig.property.requestBodyInspectionSize"></a>

```python
request_body_inspection_size: str
```

- *Type:* str

The maximum request size chosen by the customer with Waf enabled.

Values supported are "8KB", "16KB", "32KB", "48KB" and "64KB".
Values are case insensitive. Possible values: ["8KB", "16KB", "32KB", "48KB", "64KB"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#request_body_inspection_size GoogleComputeOrganizationSecurityPolicy#request_body_inspection_size}

---

##### `user_ip_request_headers`<sup>Optional</sup> <a name="user_ip_request_headers" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig.property.userIpRequestHeaders"></a>

```python
user_ip_request_headers: typing.List[str]
```

- *Type:* typing.List[str]

An optional list of case-insensitive request header names to use for resolving the client source IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#user_ip_request_headers GoogleComputeOrganizationSecurityPolicy#user_ip_request_headers}

---

### GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig <a name="GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_organization_security_policy

googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig(
  content_types: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig.property.contentTypes">content_types</a></code> | <code>typing.List[str]</code> | A list of content types to be parsed as JSON. |

---

##### `content_types`<sup>Required</sup> <a name="content_types" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig.property.contentTypes"></a>

```python
content_types: typing.List[str]
```

- *Type:* typing.List[str]

A list of content types to be parsed as JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#content_types GoogleComputeOrganizationSecurityPolicy#content_types}

---

### GoogleComputeOrganizationSecurityPolicyConfig <a name="GoogleComputeOrganizationSecurityPolicyConfig" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_organization_security_policy

googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  parent: str,
  advanced_options_config: GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig = None,
  deletion_policy: str = None,
  description: str = None,
  display_name: str = None,
  id: str = None,
  short_name: str = None,
  timeouts: GoogleComputeOrganizationSecurityPolicyTimeouts = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.parent">parent</a></code> | <code>str</code> | The parent of this OrganizationSecurityPolicy in the Cloud Resource Hierarchy. Format: organizations/{organization_id} or folders/{folder_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.advancedOptionsConfig">advanced_options_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig">GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig</a></code> | advanced_options_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.description">description</a></code> | <code>str</code> | A textual description for the organization security policy. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.displayName">display_name</a></code> | <code>str</code> | User-provided name of the organization security policy. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#id GoogleComputeOrganizationSecurityPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.shortName">short_name</a></code> | <code>str</code> | User-provided name of the organization security policy. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeouts">GoogleComputeOrganizationSecurityPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.type">type</a></code> | <code>str</code> | The type indicates the intended use of the security policy. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The parent of this OrganizationSecurityPolicy in the Cloud Resource Hierarchy. Format: organizations/{organization_id} or folders/{folder_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#parent GoogleComputeOrganizationSecurityPolicy#parent}

---

##### `advanced_options_config`<sup>Optional</sup> <a name="advanced_options_config" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.advancedOptionsConfig"></a>

```python
advanced_options_config: GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig">GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig</a>

advanced_options_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#advanced_options_config GoogleComputeOrganizationSecurityPolicy#advanced_options_config}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#deletion_policy GoogleComputeOrganizationSecurityPolicy#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A textual description for the organization security policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#description GoogleComputeOrganizationSecurityPolicy#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

User-provided name of the organization security policy.

The name should be unique in the organization in which the security policy is created. This should only be used when SecurityPolicyType is FIREWALL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#display_name GoogleComputeOrganizationSecurityPolicy#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#id GoogleComputeOrganizationSecurityPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `short_name`<sup>Optional</sup> <a name="short_name" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.shortName"></a>

```python
short_name: str
```

- *Type:* str

User-provided name of the organization security policy.

The name should be unique in the organization in which the security policy is created. This should only be used when SecurityPolicyType is CLOUD_ARMOR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#short_name GoogleComputeOrganizationSecurityPolicy#short_name}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.timeouts"></a>

```python
timeouts: GoogleComputeOrganizationSecurityPolicyTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeouts">GoogleComputeOrganizationSecurityPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#timeouts GoogleComputeOrganizationSecurityPolicy#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type indicates the intended use of the security policy.

This field can be set only at resource creation time.

**NOTE** : 'FIREWALL' type is deprecated and will be removed in a future major release. Please use 'google_compute_firewall_policy' instead." Possible values: ["FIREWALL", "CLOUD_ARMOR", "CLOUD_ARMOR_EDGE", "CLOUD_ARMOR_INTERNAL_SERVICE", "CLOUD_ARMOR_NETWORK"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#type GoogleComputeOrganizationSecurityPolicy#type}

---

### GoogleComputeOrganizationSecurityPolicyTimeouts <a name="GoogleComputeOrganizationSecurityPolicyTimeouts" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_organization_security_policy

googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#create GoogleComputeOrganizationSecurityPolicy#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#delete GoogleComputeOrganizationSecurityPolicy#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#update GoogleComputeOrganizationSecurityPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#create GoogleComputeOrganizationSecurityPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#delete GoogleComputeOrganizationSecurityPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#update GoogleComputeOrganizationSecurityPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference <a name="GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_organization_security_policy

googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.contentTypesInput">content_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.contentTypes">content_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_types_input`<sup>Optional</sup> <a name="content_types_input" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.contentTypesInput"></a>

```python
content_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `content_types`<sup>Required</sup> <a name="content_types" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.contentTypes"></a>

```python
content_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a>

---


### GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference <a name="GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_organization_security_policy

googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.putJsonCustomConfig">put_json_custom_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resetJsonCustomConfig">reset_json_custom_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resetJsonParsing">reset_json_parsing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resetLogLevel">reset_log_level</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resetRequestBodyInspectionSize">reset_request_body_inspection_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resetUserIpRequestHeaders">reset_user_ip_request_headers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_json_custom_config` <a name="put_json_custom_config" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.putJsonCustomConfig"></a>

```python
def put_json_custom_config(
  content_types: typing.List[str]
) -> None
```

###### `content_types`<sup>Required</sup> <a name="content_types" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.putJsonCustomConfig.parameter.contentTypes"></a>

- *Type:* typing.List[str]

A list of content types to be parsed as JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#content_types GoogleComputeOrganizationSecurityPolicy#content_types}

---

##### `reset_json_custom_config` <a name="reset_json_custom_config" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resetJsonCustomConfig"></a>

```python
def reset_json_custom_config() -> None
```

##### `reset_json_parsing` <a name="reset_json_parsing" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resetJsonParsing"></a>

```python
def reset_json_parsing() -> None
```

##### `reset_log_level` <a name="reset_log_level" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resetLogLevel"></a>

```python
def reset_log_level() -> None
```

##### `reset_request_body_inspection_size` <a name="reset_request_body_inspection_size" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resetRequestBodyInspectionSize"></a>

```python
def reset_request_body_inspection_size() -> None
```

##### `reset_user_ip_request_headers` <a name="reset_user_ip_request_headers" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resetUserIpRequestHeaders"></a>

```python
def reset_user_ip_request_headers() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonCustomConfig">json_custom_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference">GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonCustomConfigInput">json_custom_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonParsingInput">json_parsing_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.logLevelInput">log_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.requestBodyInspectionSizeInput">request_body_inspection_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.userIpRequestHeadersInput">user_ip_request_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonParsing">json_parsing</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.logLevel">log_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.requestBodyInspectionSize">request_body_inspection_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.userIpRequestHeaders">user_ip_request_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig">GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `json_custom_config`<sup>Required</sup> <a name="json_custom_config" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonCustomConfig"></a>

```python
json_custom_config: GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference">GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference</a>

---

##### `json_custom_config_input`<sup>Optional</sup> <a name="json_custom_config_input" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonCustomConfigInput"></a>

```python
json_custom_config_input: GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a>

---

##### `json_parsing_input`<sup>Optional</sup> <a name="json_parsing_input" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonParsingInput"></a>

```python
json_parsing_input: str
```

- *Type:* str

---

##### `log_level_input`<sup>Optional</sup> <a name="log_level_input" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.logLevelInput"></a>

```python
log_level_input: str
```

- *Type:* str

---

##### `request_body_inspection_size_input`<sup>Optional</sup> <a name="request_body_inspection_size_input" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.requestBodyInspectionSizeInput"></a>

```python
request_body_inspection_size_input: str
```

- *Type:* str

---

##### `user_ip_request_headers_input`<sup>Optional</sup> <a name="user_ip_request_headers_input" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.userIpRequestHeadersInput"></a>

```python
user_ip_request_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `json_parsing`<sup>Required</sup> <a name="json_parsing" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonParsing"></a>

```python
json_parsing: str
```

- *Type:* str

---

##### `log_level`<sup>Required</sup> <a name="log_level" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

---

##### `request_body_inspection_size`<sup>Required</sup> <a name="request_body_inspection_size" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.requestBodyInspectionSize"></a>

```python
request_body_inspection_size: str
```

- *Type:* str

---

##### `user_ip_request_headers`<sup>Required</sup> <a name="user_ip_request_headers" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.userIpRequestHeaders"></a>

```python
user_ip_request_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig">GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig</a>

---


### GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference <a name="GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_organization_security_policy

googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeouts">GoogleComputeOrganizationSecurityPolicyTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleComputeOrganizationSecurityPolicyTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeouts">GoogleComputeOrganizationSecurityPolicyTimeouts</a>

---



