# `googleIamWorkforcePoolProviderScimToken` Submodule <a name="`googleIamWorkforcePoolProviderScimToken` Submodule" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIamWorkforcePoolProviderScimToken <a name="GoogleIamWorkforcePoolProviderScimToken" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iam_workforce_pool_provider_scim_token google_iam_workforce_pool_provider_scim_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_iam_workforce_pool_provider_scim_token.GoogleIamWorkforcePoolProviderScimToken;

GoogleIamWorkforcePoolProviderScimToken.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .providerId(java.lang.String)
    .scimTenantId(java.lang.String)
    .scimTokenId(java.lang.String)
    .workforcePoolId(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(GoogleIamWorkforcePoolProviderScimTokenTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.Initializer.parameter.providerId">providerId</a></code> | <code>java.lang.String</code> | The ID of the Provider. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.Initializer.parameter.scimTenantId">scimTenantId</a></code> | <code>java.lang.String</code> | The ID of the SCIM Tenant. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.Initializer.parameter.scimTokenId">scimTokenId</a></code> | <code>java.lang.String</code> | The ID to use for the SCIM Token, which becomes the final component of the resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.Initializer.parameter.workforcePoolId">workforcePoolId</a></code> | <code>java.lang.String</code> | The ID of the Workforce Pool. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | A user-specified display name for the scim token. Cannot exceed 32 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iam_workforce_pool_provider_scim_token#id GoogleIamWorkforcePoolProviderScimToken#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeouts">GoogleIamWorkforcePoolProviderScimTokenTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iam_workforce_pool_provider_scim_token#location GoogleIamWorkforcePoolProviderScimToken#location}

---

##### `providerId`<sup>Required</sup> <a name="providerId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.Initializer.parameter.providerId"></a>

- *Type:* java.lang.String

The ID of the Provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iam_workforce_pool_provider_scim_token#provider_id GoogleIamWorkforcePoolProviderScimToken#provider_id}

---

##### `scimTenantId`<sup>Required</sup> <a name="scimTenantId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.Initializer.parameter.scimTenantId"></a>

- *Type:* java.lang.String

The ID of the SCIM Tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iam_workforce_pool_provider_scim_token#scim_tenant_id GoogleIamWorkforcePoolProviderScimToken#scim_tenant_id}

---

##### `scimTokenId`<sup>Required</sup> <a name="scimTokenId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.Initializer.parameter.scimTokenId"></a>

- *Type:* java.lang.String

The ID to use for the SCIM Token, which becomes the final component of the resource name.

This value should be 4-32 characters and follow the pattern: '([a-z](%5Ba-z0-9%5C-%5D%7B2,30%7D%5Ba-z0-9%5D))'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iam_workforce_pool_provider_scim_token#scim_token_id GoogleIamWorkforcePoolProviderScimToken#scim_token_id}

---

##### `workforcePoolId`<sup>Required</sup> <a name="workforcePoolId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.Initializer.parameter.workforcePoolId"></a>

- *Type:* java.lang.String

The ID of the Workforce Pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iam_workforce_pool_provider_scim_token#workforce_pool_id GoogleIamWorkforcePoolProviderScimToken#workforce_pool_id}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

A user-specified display name for the scim token. Cannot exceed 32 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iam_workforce_pool_provider_scim_token#display_name GoogleIamWorkforcePoolProviderScimToken#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iam_workforce_pool_provider_scim_token#id GoogleIamWorkforcePoolProviderScimToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeouts">GoogleIamWorkforcePoolProviderScimTokenTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iam_workforce_pool_provider_scim_token#timeouts GoogleIamWorkforcePoolProviderScimToken#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.putTimeouts"></a>

```java
public void putTimeouts(GoogleIamWorkforcePoolProviderScimTokenTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeouts">GoogleIamWorkforcePoolProviderScimTokenTimeouts</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleIamWorkforcePoolProviderScimToken resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_iam_workforce_pool_provider_scim_token.GoogleIamWorkforcePoolProviderScimToken;

GoogleIamWorkforcePoolProviderScimToken.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_iam_workforce_pool_provider_scim_token.GoogleIamWorkforcePoolProviderScimToken;

GoogleIamWorkforcePoolProviderScimToken.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_iam_workforce_pool_provider_scim_token.GoogleIamWorkforcePoolProviderScimToken;

GoogleIamWorkforcePoolProviderScimToken.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_iam_workforce_pool_provider_scim_token.GoogleIamWorkforcePoolProviderScimToken;

GoogleIamWorkforcePoolProviderScimToken.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleIamWorkforcePoolProviderScimToken.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleIamWorkforcePoolProviderScimToken resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleIamWorkforcePoolProviderScimToken to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleIamWorkforcePoolProviderScimToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iam_workforce_pool_provider_scim_token#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleIamWorkforcePoolProviderScimToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.securityToken">securityToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference">GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.providerIdInput">providerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.scimTenantIdInput">scimTenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.scimTokenIdInput">scimTokenIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeouts">GoogleIamWorkforcePoolProviderScimTokenTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.workforcePoolIdInput">workforcePoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.providerId">providerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.scimTenantId">scimTenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.scimTokenId">scimTokenId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.workforcePoolId">workforcePoolId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `securityToken`<sup>Required</sup> <a name="securityToken" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.securityToken"></a>

```java
public java.lang.String getSecurityToken();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.timeouts"></a>

```java
public GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference">GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `providerIdInput`<sup>Optional</sup> <a name="providerIdInput" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.providerIdInput"></a>

```java
public java.lang.String getProviderIdInput();
```

- *Type:* java.lang.String

---

##### `scimTenantIdInput`<sup>Optional</sup> <a name="scimTenantIdInput" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.scimTenantIdInput"></a>

```java
public java.lang.String getScimTenantIdInput();
```

- *Type:* java.lang.String

---

##### `scimTokenIdInput`<sup>Optional</sup> <a name="scimTokenIdInput" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.scimTokenIdInput"></a>

```java
public java.lang.String getScimTokenIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.timeoutsInput"></a>

```java
public IResolvable|GoogleIamWorkforcePoolProviderScimTokenTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeouts">GoogleIamWorkforcePoolProviderScimTokenTimeouts</a>

---

##### `workforcePoolIdInput`<sup>Optional</sup> <a name="workforcePoolIdInput" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.workforcePoolIdInput"></a>

```java
public java.lang.String getWorkforcePoolIdInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `providerId`<sup>Required</sup> <a name="providerId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.providerId"></a>

```java
public java.lang.String getProviderId();
```

- *Type:* java.lang.String

---

##### `scimTenantId`<sup>Required</sup> <a name="scimTenantId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.scimTenantId"></a>

```java
public java.lang.String getScimTenantId();
```

- *Type:* java.lang.String

---

##### `scimTokenId`<sup>Required</sup> <a name="scimTokenId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.scimTokenId"></a>

```java
public java.lang.String getScimTokenId();
```

- *Type:* java.lang.String

---

##### `workforcePoolId`<sup>Required</sup> <a name="workforcePoolId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.workforcePoolId"></a>

```java
public java.lang.String getWorkforcePoolId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIamWorkforcePoolProviderScimTokenConfig <a name="GoogleIamWorkforcePoolProviderScimTokenConfig" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_iam_workforce_pool_provider_scim_token.GoogleIamWorkforcePoolProviderScimTokenConfig;

GoogleIamWorkforcePoolProviderScimTokenConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .providerId(java.lang.String)
    .scimTenantId(java.lang.String)
    .scimTokenId(java.lang.String)
    .workforcePoolId(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(GoogleIamWorkforcePoolProviderScimTokenTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.providerId">providerId</a></code> | <code>java.lang.String</code> | The ID of the Provider. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.scimTenantId">scimTenantId</a></code> | <code>java.lang.String</code> | The ID of the SCIM Tenant. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.scimTokenId">scimTokenId</a></code> | <code>java.lang.String</code> | The ID to use for the SCIM Token, which becomes the final component of the resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.workforcePoolId">workforcePoolId</a></code> | <code>java.lang.String</code> | The ID of the Workforce Pool. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | A user-specified display name for the scim token. Cannot exceed 32 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iam_workforce_pool_provider_scim_token#id GoogleIamWorkforcePoolProviderScimToken#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeouts">GoogleIamWorkforcePoolProviderScimTokenTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iam_workforce_pool_provider_scim_token#location GoogleIamWorkforcePoolProviderScimToken#location}

---

##### `providerId`<sup>Required</sup> <a name="providerId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.providerId"></a>

```java
public java.lang.String getProviderId();
```

- *Type:* java.lang.String

The ID of the Provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iam_workforce_pool_provider_scim_token#provider_id GoogleIamWorkforcePoolProviderScimToken#provider_id}

---

##### `scimTenantId`<sup>Required</sup> <a name="scimTenantId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.scimTenantId"></a>

```java
public java.lang.String getScimTenantId();
```

- *Type:* java.lang.String

The ID of the SCIM Tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iam_workforce_pool_provider_scim_token#scim_tenant_id GoogleIamWorkforcePoolProviderScimToken#scim_tenant_id}

---

##### `scimTokenId`<sup>Required</sup> <a name="scimTokenId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.scimTokenId"></a>

```java
public java.lang.String getScimTokenId();
```

- *Type:* java.lang.String

The ID to use for the SCIM Token, which becomes the final component of the resource name.

This value should be 4-32 characters and follow the pattern: '([a-z](%5Ba-z0-9%5C-%5D%7B2,30%7D%5Ba-z0-9%5D))'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iam_workforce_pool_provider_scim_token#scim_token_id GoogleIamWorkforcePoolProviderScimToken#scim_token_id}

---

##### `workforcePoolId`<sup>Required</sup> <a name="workforcePoolId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.workforcePoolId"></a>

```java
public java.lang.String getWorkforcePoolId();
```

- *Type:* java.lang.String

The ID of the Workforce Pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iam_workforce_pool_provider_scim_token#workforce_pool_id GoogleIamWorkforcePoolProviderScimToken#workforce_pool_id}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

A user-specified display name for the scim token. Cannot exceed 32 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iam_workforce_pool_provider_scim_token#display_name GoogleIamWorkforcePoolProviderScimToken#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iam_workforce_pool_provider_scim_token#id GoogleIamWorkforcePoolProviderScimToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.timeouts"></a>

```java
public GoogleIamWorkforcePoolProviderScimTokenTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeouts">GoogleIamWorkforcePoolProviderScimTokenTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iam_workforce_pool_provider_scim_token#timeouts GoogleIamWorkforcePoolProviderScimToken#timeouts}

---

### GoogleIamWorkforcePoolProviderScimTokenTimeouts <a name="GoogleIamWorkforcePoolProviderScimTokenTimeouts" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_iam_workforce_pool_provider_scim_token.GoogleIamWorkforcePoolProviderScimTokenTimeouts;

GoogleIamWorkforcePoolProviderScimTokenTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iam_workforce_pool_provider_scim_token#create GoogleIamWorkforcePoolProviderScimToken#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iam_workforce_pool_provider_scim_token#delete GoogleIamWorkforcePoolProviderScimToken#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iam_workforce_pool_provider_scim_token#update GoogleIamWorkforcePoolProviderScimToken#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iam_workforce_pool_provider_scim_token#create GoogleIamWorkforcePoolProviderScimToken#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iam_workforce_pool_provider_scim_token#delete GoogleIamWorkforcePoolProviderScimToken#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iam_workforce_pool_provider_scim_token#update GoogleIamWorkforcePoolProviderScimToken#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference <a name="GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_iam_workforce_pool_provider_scim_token.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference;

new GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeouts">GoogleIamWorkforcePoolProviderScimTokenTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleIamWorkforcePoolProviderScimTokenTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeouts">GoogleIamWorkforcePoolProviderScimTokenTimeouts</a>

---



