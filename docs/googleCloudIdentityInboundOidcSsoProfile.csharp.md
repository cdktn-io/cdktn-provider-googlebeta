# `googleCloudIdentityInboundOidcSsoProfile` Submodule <a name="`googleCloudIdentityInboundOidcSsoProfile` Submodule" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudIdentityInboundOidcSsoProfile <a name="GoogleCloudIdentityInboundOidcSsoProfile" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile google_cloud_identity_inbound_oidc_sso_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudIdentityInboundOidcSsoProfile(Construct Scope, string Id, GoogleCloudIdentityInboundOidcSsoProfileConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig">GoogleCloudIdentityInboundOidcSsoProfileConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig">GoogleCloudIdentityInboundOidcSsoProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.putIdpConfig">PutIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.putRpConfig">PutRpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetCustomer">ResetCustomer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetRpConfig">ResetRpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdpConfig` <a name="PutIdpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.putIdpConfig"></a>

```csharp
private void PutIdpConfig(GoogleCloudIdentityInboundOidcSsoProfileIdpConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.putIdpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig">GoogleCloudIdentityInboundOidcSsoProfileIdpConfig</a>

---

##### `PutRpConfig` <a name="PutRpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.putRpConfig"></a>

```csharp
private void PutRpConfig(GoogleCloudIdentityInboundOidcSsoProfileRpConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.putRpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig">GoogleCloudIdentityInboundOidcSsoProfileRpConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleCloudIdentityInboundOidcSsoProfileTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts">GoogleCloudIdentityInboundOidcSsoProfileTimeouts</a>

---

##### `ResetCustomer` <a name="ResetCustomer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetCustomer"></a>

```csharp
private void ResetCustomer()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRpConfig` <a name="ResetRpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetRpConfig"></a>

```csharp
private void ResetRpConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleCloudIdentityInboundOidcSsoProfile resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleCloudIdentityInboundOidcSsoProfile.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleCloudIdentityInboundOidcSsoProfile.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleCloudIdentityInboundOidcSsoProfile.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleCloudIdentityInboundOidcSsoProfile.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleCloudIdentityInboundOidcSsoProfile resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleCloudIdentityInboundOidcSsoProfile to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleCloudIdentityInboundOidcSsoProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCloudIdentityInboundOidcSsoProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.idpConfig">IdpConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference">GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.inboundOidcSsoProfileId">InboundOidcSsoProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.rpConfig">RpConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference">GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference">GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.customerInput">CustomerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.idpConfigInput">IdpConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig">GoogleCloudIdentityInboundOidcSsoProfileIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.rpConfigInput">RpConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig">GoogleCloudIdentityInboundOidcSsoProfileRpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts">GoogleCloudIdentityInboundOidcSsoProfileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.customer">Customer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `IdpConfig`<sup>Required</sup> <a name="IdpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.idpConfig"></a>

```csharp
public GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference IdpConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference">GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference</a>

---

##### `InboundOidcSsoProfileId`<sup>Required</sup> <a name="InboundOidcSsoProfileId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.inboundOidcSsoProfileId"></a>

```csharp
public string InboundOidcSsoProfileId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RpConfig`<sup>Required</sup> <a name="RpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.rpConfig"></a>

```csharp
public GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference RpConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference">GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.timeouts"></a>

```csharp
public GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference">GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference</a>

---

##### `CustomerInput`<sup>Optional</sup> <a name="CustomerInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.customerInput"></a>

```csharp
public string CustomerInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IdpConfigInput`<sup>Optional</sup> <a name="IdpConfigInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.idpConfigInput"></a>

```csharp
public GoogleCloudIdentityInboundOidcSsoProfileIdpConfig IdpConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig">GoogleCloudIdentityInboundOidcSsoProfileIdpConfig</a>

---

##### `RpConfigInput`<sup>Optional</sup> <a name="RpConfigInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.rpConfigInput"></a>

```csharp
public GoogleCloudIdentityInboundOidcSsoProfileRpConfig RpConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig">GoogleCloudIdentityInboundOidcSsoProfileRpConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleCloudIdentityInboundOidcSsoProfileTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts">GoogleCloudIdentityInboundOidcSsoProfileTimeouts</a>

---

##### `Customer`<sup>Required</sup> <a name="Customer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.customer"></a>

```csharp
public string Customer { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudIdentityInboundOidcSsoProfileConfig <a name="GoogleCloudIdentityInboundOidcSsoProfileConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudIdentityInboundOidcSsoProfileConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    GoogleCloudIdentityInboundOidcSsoProfileIdpConfig IdpConfig,
    string Customer = null,
    string DeletionPolicy = null,
    string DisplayName = null,
    string Id = null,
    GoogleCloudIdentityInboundOidcSsoProfileRpConfig RpConfig = null,
    GoogleCloudIdentityInboundOidcSsoProfileTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.idpConfig">IdpConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig">GoogleCloudIdentityInboundOidcSsoProfileIdpConfig</a></code> | idp_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.customer">Customer</a></code> | <code>string</code> | The customer. For example: 'customers/C0123abc'. If omitted, the customer of the caller is used. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Human-readable name of the OIDC SSO profile. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#id GoogleCloudIdentityInboundOidcSsoProfile#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.rpConfig">RpConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig">GoogleCloudIdentityInboundOidcSsoProfileRpConfig</a></code> | rp_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts">GoogleCloudIdentityInboundOidcSsoProfileTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `IdpConfig`<sup>Required</sup> <a name="IdpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.idpConfig"></a>

```csharp
public GoogleCloudIdentityInboundOidcSsoProfileIdpConfig IdpConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig">GoogleCloudIdentityInboundOidcSsoProfileIdpConfig</a>

idp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#idp_config GoogleCloudIdentityInboundOidcSsoProfile#idp_config}

---

##### `Customer`<sup>Optional</sup> <a name="Customer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.customer"></a>

```csharp
public string Customer { get; set; }
```

- *Type:* string

The customer. For example: 'customers/C0123abc'. If omitted, the customer of the caller is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#customer GoogleCloudIdentityInboundOidcSsoProfile#customer}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#deletion_policy GoogleCloudIdentityInboundOidcSsoProfile#deletion_policy}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Human-readable name of the OIDC SSO profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#display_name GoogleCloudIdentityInboundOidcSsoProfile#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#id GoogleCloudIdentityInboundOidcSsoProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RpConfig`<sup>Optional</sup> <a name="RpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.rpConfig"></a>

```csharp
public GoogleCloudIdentityInboundOidcSsoProfileRpConfig RpConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig">GoogleCloudIdentityInboundOidcSsoProfileRpConfig</a>

rp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#rp_config GoogleCloudIdentityInboundOidcSsoProfile#rp_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.timeouts"></a>

```csharp
public GoogleCloudIdentityInboundOidcSsoProfileTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts">GoogleCloudIdentityInboundOidcSsoProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#timeouts GoogleCloudIdentityInboundOidcSsoProfile#timeouts}

---

### GoogleCloudIdentityInboundOidcSsoProfileIdpConfig <a name="GoogleCloudIdentityInboundOidcSsoProfileIdpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudIdentityInboundOidcSsoProfileIdpConfig {
    string IssuerUri,
    string ChangePasswordUri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig.property.issuerUri">IssuerUri</a></code> | <code>string</code> | The Issuer identifier for the IdP. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig.property.changePasswordUri">ChangePasswordUri</a></code> | <code>string</code> | The **Change Password URL** of the identity provider. |

---

##### `IssuerUri`<sup>Required</sup> <a name="IssuerUri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig.property.issuerUri"></a>

```csharp
public string IssuerUri { get; set; }
```

- *Type:* string

The Issuer identifier for the IdP.

Must be a URL. The discovery URL will be derived
from this as described in Section 4 of the OIDC specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#issuer_uri GoogleCloudIdentityInboundOidcSsoProfile#issuer_uri}

---

##### `ChangePasswordUri`<sup>Optional</sup> <a name="ChangePasswordUri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig.property.changePasswordUri"></a>

```csharp
public string ChangePasswordUri { get; set; }
```

- *Type:* string

The **Change Password URL** of the identity provider.

Users will be sent to this URL
when changing their passwords at 'myaccount.google.com'. This takes precedence over
the change password URL configured at customer-level. Must use 'HTTPS'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#change_password_uri GoogleCloudIdentityInboundOidcSsoProfile#change_password_uri}

---

### GoogleCloudIdentityInboundOidcSsoProfileRpConfig <a name="GoogleCloudIdentityInboundOidcSsoProfileRpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudIdentityInboundOidcSsoProfileRpConfig {
    string ClientId = null,
    string ClientSecret = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig.property.clientId">ClientId</a></code> | <code>string</code> | OAuth2 client ID for OIDC. Must be set together with 'client_secret'. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig.property.clientSecret">ClientSecret</a></code> | <code>string</code> | Input only. OAuth2 client secret for OIDC. Must be set together with 'client_id'. |

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

OAuth2 client ID for OIDC. Must be set together with 'client_secret'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#client_id GoogleCloudIdentityInboundOidcSsoProfile#client_id}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

Input only. OAuth2 client secret for OIDC. Must be set together with 'client_id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#client_secret GoogleCloudIdentityInboundOidcSsoProfile#client_secret}

---

### GoogleCloudIdentityInboundOidcSsoProfileTimeouts <a name="GoogleCloudIdentityInboundOidcSsoProfileTimeouts" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudIdentityInboundOidcSsoProfileTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#create GoogleCloudIdentityInboundOidcSsoProfile#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#delete GoogleCloudIdentityInboundOidcSsoProfile#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#update GoogleCloudIdentityInboundOidcSsoProfile#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#create GoogleCloudIdentityInboundOidcSsoProfile#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#delete GoogleCloudIdentityInboundOidcSsoProfile#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#update GoogleCloudIdentityInboundOidcSsoProfile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference <a name="GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.resetChangePasswordUri">ResetChangePasswordUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChangePasswordUri` <a name="ResetChangePasswordUri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.resetChangePasswordUri"></a>

```csharp
private void ResetChangePasswordUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.changePasswordUriInput">ChangePasswordUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.issuerUriInput">IssuerUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.changePasswordUri">ChangePasswordUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.issuerUri">IssuerUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig">GoogleCloudIdentityInboundOidcSsoProfileIdpConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChangePasswordUriInput`<sup>Optional</sup> <a name="ChangePasswordUriInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.changePasswordUriInput"></a>

```csharp
public string ChangePasswordUriInput { get; }
```

- *Type:* string

---

##### `IssuerUriInput`<sup>Optional</sup> <a name="IssuerUriInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.issuerUriInput"></a>

```csharp
public string IssuerUriInput { get; }
```

- *Type:* string

---

##### `ChangePasswordUri`<sup>Required</sup> <a name="ChangePasswordUri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.changePasswordUri"></a>

```csharp
public string ChangePasswordUri { get; }
```

- *Type:* string

---

##### `IssuerUri`<sup>Required</sup> <a name="IssuerUri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.issuerUri"></a>

```csharp
public string IssuerUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudIdentityInboundOidcSsoProfileIdpConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig">GoogleCloudIdentityInboundOidcSsoProfileIdpConfig</a>

---


### GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference <a name="GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.redirectUris">RedirectUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig">GoogleCloudIdentityInboundOidcSsoProfileRpConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RedirectUris`<sup>Required</sup> <a name="RedirectUris" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.redirectUris"></a>

```csharp
public string[] RedirectUris { get; }
```

- *Type:* string[]

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudIdentityInboundOidcSsoProfileRpConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig">GoogleCloudIdentityInboundOidcSsoProfileRpConfig</a>

---


### GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference <a name="GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts">GoogleCloudIdentityInboundOidcSsoProfileTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleCloudIdentityInboundOidcSsoProfileTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts">GoogleCloudIdentityInboundOidcSsoProfileTimeouts</a>

---



