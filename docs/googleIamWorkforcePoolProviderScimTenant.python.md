# `googleIamWorkforcePoolProviderScimTenant` Submodule <a name="`googleIamWorkforcePoolProviderScimTenant` Submodule" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIamWorkforcePoolProviderScimTenant <a name="GoogleIamWorkforcePoolProviderScimTenant" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant google_iam_workforce_pool_provider_scim_tenant}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.Initializer"></a>

```python
from cdktn_provider_google_beta import google_iam_workforce_pool_provider_scim_tenant

googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  provider_id: str,
  scim_tenant_id: str,
  workforce_pool_id: str,
  claim_mapping: typing.Mapping[str] = None,
  deletion_policy: str = None,
  description: str = None,
  display_name: str = None,
  hard_delete: bool | IResolvable = None,
  id: str = None,
  timeouts: GoogleIamWorkforcePoolProviderScimTenantTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.Initializer.parameter.providerId">provider_id</a></code> | <code>str</code> | The ID of the provider. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.Initializer.parameter.scimTenantId">scim_tenant_id</a></code> | <code>str</code> | The ID to use for the SCIM tenant, which becomes the final component of the resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.Initializer.parameter.workforcePoolId">workforce_pool_id</a></code> | <code>str</code> | The ID of the workforce pool. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.Initializer.parameter.claimMapping">claim_mapping</a></code> | <code>typing.Mapping[str]</code> | Maps BYOID claims to SCIM claims. This is a required field for new SCIM Tenants being created. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.Initializer.parameter.description">description</a></code> | <code>str</code> | A user-specified description of the provider. Cannot exceed 256 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | A user-specified display name for the scim tenant. Cannot exceed 32 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.Initializer.parameter.hardDelete">hard_delete</a></code> | <code>bool \| cdktn.IResolvable</code> | Deletes the SCIM tenant immediately. This operation cannot be undone. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#id GoogleIamWorkforcePoolProviderScimTenant#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeouts">GoogleIamWorkforcePoolProviderScimTenantTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.Initializer.parameter.location"></a>

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#location GoogleIamWorkforcePoolProviderScimTenant#location}

---

##### `provider_id`<sup>Required</sup> <a name="provider_id" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.Initializer.parameter.providerId"></a>

- *Type:* str

The ID of the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#provider_id GoogleIamWorkforcePoolProviderScimTenant#provider_id}

---

##### `scim_tenant_id`<sup>Required</sup> <a name="scim_tenant_id" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.Initializer.parameter.scimTenantId"></a>

- *Type:* str

The ID to use for the SCIM tenant, which becomes the final component of the resource name.

This value must be 4-32 characters, and may contain the characters [a-z0-9-].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#scim_tenant_id GoogleIamWorkforcePoolProviderScimTenant#scim_tenant_id}

---

##### `workforce_pool_id`<sup>Required</sup> <a name="workforce_pool_id" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.Initializer.parameter.workforcePoolId"></a>

- *Type:* str

The ID of the workforce pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#workforce_pool_id GoogleIamWorkforcePoolProviderScimTenant#workforce_pool_id}

---

##### `claim_mapping`<sup>Optional</sup> <a name="claim_mapping" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.Initializer.parameter.claimMapping"></a>

- *Type:* typing.Mapping[str]

Maps BYOID claims to SCIM claims. This is a required field for new SCIM Tenants being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#claim_mapping GoogleIamWorkforcePoolProviderScimTenant#claim_mapping}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#deletion_policy GoogleIamWorkforcePoolProviderScimTenant#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.Initializer.parameter.description"></a>

- *Type:* str

A user-specified description of the provider. Cannot exceed 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#description GoogleIamWorkforcePoolProviderScimTenant#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.Initializer.parameter.displayName"></a>

- *Type:* str

A user-specified display name for the scim tenant. Cannot exceed 32 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#display_name GoogleIamWorkforcePoolProviderScimTenant#display_name}

---

##### `hard_delete`<sup>Optional</sup> <a name="hard_delete" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.Initializer.parameter.hardDelete"></a>

- *Type:* bool | cdktn.IResolvable

Deletes the SCIM tenant immediately. This operation cannot be undone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#hard_delete GoogleIamWorkforcePoolProviderScimTenant#hard_delete}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#id GoogleIamWorkforcePoolProviderScimTenant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeouts">GoogleIamWorkforcePoolProviderScimTenantTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#timeouts GoogleIamWorkforcePoolProviderScimTenant#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.resetClaimMapping">reset_claim_mapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.resetHardDelete">reset_hard_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#create GoogleIamWorkforcePoolProviderScimTenant#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#delete GoogleIamWorkforcePoolProviderScimTenant#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#update GoogleIamWorkforcePoolProviderScimTenant#update}.

---

##### `reset_claim_mapping` <a name="reset_claim_mapping" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.resetClaimMapping"></a>

```python
def reset_claim_mapping() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_hard_delete` <a name="reset_hard_delete" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.resetHardDelete"></a>

```python
def reset_hard_delete() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleIamWorkforcePoolProviderScimTenant resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_iam_workforce_pool_provider_scim_tenant

googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_iam_workforce_pool_provider_scim_tenant

googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_iam_workforce_pool_provider_scim_tenant

googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_iam_workforce_pool_provider_scim_tenant

googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleIamWorkforcePoolProviderScimTenant resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleIamWorkforcePoolProviderScimTenant to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleIamWorkforcePoolProviderScimTenant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleIamWorkforcePoolProviderScimTenant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.baseUri">base_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.purgeTime">purge_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.serviceAgent">service_agent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference">GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.claimMappingInput">claim_mapping_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.hardDeleteInput">hard_delete_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.providerIdInput">provider_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.scimTenantIdInput">scim_tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeouts">GoogleIamWorkforcePoolProviderScimTenantTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.workforcePoolIdInput">workforce_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.claimMapping">claim_mapping</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.hardDelete">hard_delete</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.providerId">provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.scimTenantId">scim_tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.workforcePoolId">workforce_pool_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `base_uri`<sup>Required</sup> <a name="base_uri" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.baseUri"></a>

```python
base_uri: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `purge_time`<sup>Required</sup> <a name="purge_time" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.purgeTime"></a>

```python
purge_time: str
```

- *Type:* str

---

##### `service_agent`<sup>Required</sup> <a name="service_agent" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.serviceAgent"></a>

```python
service_agent: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.timeouts"></a>

```python
timeouts: GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference">GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference</a>

---

##### `claim_mapping_input`<sup>Optional</sup> <a name="claim_mapping_input" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.claimMappingInput"></a>

```python
claim_mapping_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `hard_delete_input`<sup>Optional</sup> <a name="hard_delete_input" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.hardDeleteInput"></a>

```python
hard_delete_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `provider_id_input`<sup>Optional</sup> <a name="provider_id_input" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.providerIdInput"></a>

```python
provider_id_input: str
```

- *Type:* str

---

##### `scim_tenant_id_input`<sup>Optional</sup> <a name="scim_tenant_id_input" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.scimTenantIdInput"></a>

```python
scim_tenant_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleIamWorkforcePoolProviderScimTenantTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeouts">GoogleIamWorkforcePoolProviderScimTenantTimeouts</a>

---

##### `workforce_pool_id_input`<sup>Optional</sup> <a name="workforce_pool_id_input" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.workforcePoolIdInput"></a>

```python
workforce_pool_id_input: str
```

- *Type:* str

---

##### `claim_mapping`<sup>Required</sup> <a name="claim_mapping" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.claimMapping"></a>

```python
claim_mapping: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `hard_delete`<sup>Required</sup> <a name="hard_delete" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.hardDelete"></a>

```python
hard_delete: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `provider_id`<sup>Required</sup> <a name="provider_id" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.providerId"></a>

```python
provider_id: str
```

- *Type:* str

---

##### `scim_tenant_id`<sup>Required</sup> <a name="scim_tenant_id" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.scimTenantId"></a>

```python
scim_tenant_id: str
```

- *Type:* str

---

##### `workforce_pool_id`<sup>Required</sup> <a name="workforce_pool_id" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.workforcePoolId"></a>

```python
workforce_pool_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIamWorkforcePoolProviderScimTenantConfig <a name="GoogleIamWorkforcePoolProviderScimTenantConfig" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_iam_workforce_pool_provider_scim_tenant

googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  provider_id: str,
  scim_tenant_id: str,
  workforce_pool_id: str,
  claim_mapping: typing.Mapping[str] = None,
  deletion_policy: str = None,
  description: str = None,
  display_name: str = None,
  hard_delete: bool | IResolvable = None,
  id: str = None,
  timeouts: GoogleIamWorkforcePoolProviderScimTenantTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.providerId">provider_id</a></code> | <code>str</code> | The ID of the provider. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.scimTenantId">scim_tenant_id</a></code> | <code>str</code> | The ID to use for the SCIM tenant, which becomes the final component of the resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.workforcePoolId">workforce_pool_id</a></code> | <code>str</code> | The ID of the workforce pool. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.claimMapping">claim_mapping</a></code> | <code>typing.Mapping[str]</code> | Maps BYOID claims to SCIM claims. This is a required field for new SCIM Tenants being created. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.description">description</a></code> | <code>str</code> | A user-specified description of the provider. Cannot exceed 256 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.displayName">display_name</a></code> | <code>str</code> | A user-specified display name for the scim tenant. Cannot exceed 32 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.hardDelete">hard_delete</a></code> | <code>bool \| cdktn.IResolvable</code> | Deletes the SCIM tenant immediately. This operation cannot be undone. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#id GoogleIamWorkforcePoolProviderScimTenant#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeouts">GoogleIamWorkforcePoolProviderScimTenantTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#location GoogleIamWorkforcePoolProviderScimTenant#location}

---

##### `provider_id`<sup>Required</sup> <a name="provider_id" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.providerId"></a>

```python
provider_id: str
```

- *Type:* str

The ID of the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#provider_id GoogleIamWorkforcePoolProviderScimTenant#provider_id}

---

##### `scim_tenant_id`<sup>Required</sup> <a name="scim_tenant_id" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.scimTenantId"></a>

```python
scim_tenant_id: str
```

- *Type:* str

The ID to use for the SCIM tenant, which becomes the final component of the resource name.

This value must be 4-32 characters, and may contain the characters [a-z0-9-].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#scim_tenant_id GoogleIamWorkforcePoolProviderScimTenant#scim_tenant_id}

---

##### `workforce_pool_id`<sup>Required</sup> <a name="workforce_pool_id" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.workforcePoolId"></a>

```python
workforce_pool_id: str
```

- *Type:* str

The ID of the workforce pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#workforce_pool_id GoogleIamWorkforcePoolProviderScimTenant#workforce_pool_id}

---

##### `claim_mapping`<sup>Optional</sup> <a name="claim_mapping" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.claimMapping"></a>

```python
claim_mapping: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Maps BYOID claims to SCIM claims. This is a required field for new SCIM Tenants being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#claim_mapping GoogleIamWorkforcePoolProviderScimTenant#claim_mapping}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#deletion_policy GoogleIamWorkforcePoolProviderScimTenant#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A user-specified description of the provider. Cannot exceed 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#description GoogleIamWorkforcePoolProviderScimTenant#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

A user-specified display name for the scim tenant. Cannot exceed 32 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#display_name GoogleIamWorkforcePoolProviderScimTenant#display_name}

---

##### `hard_delete`<sup>Optional</sup> <a name="hard_delete" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.hardDelete"></a>

```python
hard_delete: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Deletes the SCIM tenant immediately. This operation cannot be undone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#hard_delete GoogleIamWorkforcePoolProviderScimTenant#hard_delete}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#id GoogleIamWorkforcePoolProviderScimTenant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.timeouts"></a>

```python
timeouts: GoogleIamWorkforcePoolProviderScimTenantTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeouts">GoogleIamWorkforcePoolProviderScimTenantTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#timeouts GoogleIamWorkforcePoolProviderScimTenant#timeouts}

---

### GoogleIamWorkforcePoolProviderScimTenantTimeouts <a name="GoogleIamWorkforcePoolProviderScimTenantTimeouts" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_iam_workforce_pool_provider_scim_tenant

googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#create GoogleIamWorkforcePoolProviderScimTenant#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#delete GoogleIamWorkforcePoolProviderScimTenant#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#update GoogleIamWorkforcePoolProviderScimTenant#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#create GoogleIamWorkforcePoolProviderScimTenant#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#delete GoogleIamWorkforcePoolProviderScimTenant#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#update GoogleIamWorkforcePoolProviderScimTenant#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference <a name="GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_iam_workforce_pool_provider_scim_tenant

googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeouts">GoogleIamWorkforcePoolProviderScimTenantTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleIamWorkforcePoolProviderScimTenantTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeouts">GoogleIamWorkforcePoolProviderScimTenantTimeouts</a>

---



