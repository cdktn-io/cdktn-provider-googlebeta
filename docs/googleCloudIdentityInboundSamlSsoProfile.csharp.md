# `googleCloudIdentityInboundSamlSsoProfile` Submodule <a name="`googleCloudIdentityInboundSamlSsoProfile` Submodule" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudIdentityInboundSamlSsoProfile <a name="GoogleCloudIdentityInboundSamlSsoProfile" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile google_cloud_identity_inbound_saml_sso_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudIdentityInboundSamlSsoProfile(Construct Scope, string Id, GoogleCloudIdentityInboundSamlSsoProfileConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig">GoogleCloudIdentityInboundSamlSsoProfileConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig">GoogleCloudIdentityInboundSamlSsoProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.putIdpConfig">PutIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.resetCustomer">ResetCustomer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdpConfig` <a name="PutIdpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.putIdpConfig"></a>

```csharp
private void PutIdpConfig(GoogleCloudIdentityInboundSamlSsoProfileIdpConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.putIdpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig">GoogleCloudIdentityInboundSamlSsoProfileIdpConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleCloudIdentityInboundSamlSsoProfileTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts">GoogleCloudIdentityInboundSamlSsoProfileTimeouts</a>

---

##### `ResetCustomer` <a name="ResetCustomer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.resetCustomer"></a>

```csharp
private void ResetCustomer()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleCloudIdentityInboundSamlSsoProfile resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleCloudIdentityInboundSamlSsoProfile.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleCloudIdentityInboundSamlSsoProfile.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleCloudIdentityInboundSamlSsoProfile.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleCloudIdentityInboundSamlSsoProfile.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleCloudIdentityInboundSamlSsoProfile resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleCloudIdentityInboundSamlSsoProfile to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleCloudIdentityInboundSamlSsoProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCloudIdentityInboundSamlSsoProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.idpConfig">IdpConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference">GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.inboundSamlSsoProfileId">InboundSamlSsoProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.spConfig">SpConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList">GoogleCloudIdentityInboundSamlSsoProfileSpConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference">GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.customerInput">CustomerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.idpConfigInput">IdpConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig">GoogleCloudIdentityInboundSamlSsoProfileIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts">GoogleCloudIdentityInboundSamlSsoProfileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.customer">Customer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `IdpConfig`<sup>Required</sup> <a name="IdpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.idpConfig"></a>

```csharp
public GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference IdpConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference">GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference</a>

---

##### `InboundSamlSsoProfileId`<sup>Required</sup> <a name="InboundSamlSsoProfileId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.inboundSamlSsoProfileId"></a>

```csharp
public string InboundSamlSsoProfileId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SpConfig`<sup>Required</sup> <a name="SpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.spConfig"></a>

```csharp
public GoogleCloudIdentityInboundSamlSsoProfileSpConfigList SpConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList">GoogleCloudIdentityInboundSamlSsoProfileSpConfigList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.timeouts"></a>

```csharp
public GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference">GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference</a>

---

##### `CustomerInput`<sup>Optional</sup> <a name="CustomerInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.customerInput"></a>

```csharp
public string CustomerInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IdpConfigInput`<sup>Optional</sup> <a name="IdpConfigInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.idpConfigInput"></a>

```csharp
public GoogleCloudIdentityInboundSamlSsoProfileIdpConfig IdpConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig">GoogleCloudIdentityInboundSamlSsoProfileIdpConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleCloudIdentityInboundSamlSsoProfileTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts">GoogleCloudIdentityInboundSamlSsoProfileTimeouts</a>

---

##### `Customer`<sup>Required</sup> <a name="Customer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.customer"></a>

```csharp
public string Customer { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudIdentityInboundSamlSsoProfileConfig <a name="GoogleCloudIdentityInboundSamlSsoProfileConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudIdentityInboundSamlSsoProfileConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    GoogleCloudIdentityInboundSamlSsoProfileIdpConfig IdpConfig,
    string Customer = null,
    string DeletionPolicy = null,
    string DisplayName = null,
    string Id = null,
    GoogleCloudIdentityInboundSamlSsoProfileTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.idpConfig">IdpConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig">GoogleCloudIdentityInboundSamlSsoProfileIdpConfig</a></code> | idp_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.customer">Customer</a></code> | <code>string</code> | The customer. For example: 'customers/C0123abc'. If omitted, the customer of the caller is used. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Human-readable name of the SAML SSO profile. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#id GoogleCloudIdentityInboundSamlSsoProfile#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts">GoogleCloudIdentityInboundSamlSsoProfileTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `IdpConfig`<sup>Required</sup> <a name="IdpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.idpConfig"></a>

```csharp
public GoogleCloudIdentityInboundSamlSsoProfileIdpConfig IdpConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig">GoogleCloudIdentityInboundSamlSsoProfileIdpConfig</a>

idp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#idp_config GoogleCloudIdentityInboundSamlSsoProfile#idp_config}

---

##### `Customer`<sup>Optional</sup> <a name="Customer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.customer"></a>

```csharp
public string Customer { get; set; }
```

- *Type:* string

The customer. For example: 'customers/C0123abc'. If omitted, the customer of the caller is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#customer GoogleCloudIdentityInboundSamlSsoProfile#customer}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#deletion_policy GoogleCloudIdentityInboundSamlSsoProfile#deletion_policy}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Human-readable name of the SAML SSO profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#display_name GoogleCloudIdentityInboundSamlSsoProfile#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#id GoogleCloudIdentityInboundSamlSsoProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.timeouts"></a>

```csharp
public GoogleCloudIdentityInboundSamlSsoProfileTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts">GoogleCloudIdentityInboundSamlSsoProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#timeouts GoogleCloudIdentityInboundSamlSsoProfile#timeouts}

---

### GoogleCloudIdentityInboundSamlSsoProfileIdpConfig <a name="GoogleCloudIdentityInboundSamlSsoProfileIdpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudIdentityInboundSamlSsoProfileIdpConfig {
    string EntityId,
    string SingleSignOnServiceUri,
    string ChangePasswordUri = null,
    string LogoutRedirectUri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig.property.entityId">EntityId</a></code> | <code>string</code> | The SAML **Entity ID** of the identity provider. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig.property.singleSignOnServiceUri">SingleSignOnServiceUri</a></code> | <code>string</code> | The 'SingleSignOnService' endpoint location (sign-in page URL) of the identity provider. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig.property.changePasswordUri">ChangePasswordUri</a></code> | <code>string</code> | The **Change Password URL** of the identity provider. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig.property.logoutRedirectUri">LogoutRedirectUri</a></code> | <code>string</code> | The **Logout Redirect URL** (sign-out page URL) of the identity provider. |

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig.property.entityId"></a>

```csharp
public string EntityId { get; set; }
```

- *Type:* string

The SAML **Entity ID** of the identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#entity_id GoogleCloudIdentityInboundSamlSsoProfile#entity_id}

---

##### `SingleSignOnServiceUri`<sup>Required</sup> <a name="SingleSignOnServiceUri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig.property.singleSignOnServiceUri"></a>

```csharp
public string SingleSignOnServiceUri { get; set; }
```

- *Type:* string

The 'SingleSignOnService' endpoint location (sign-in page URL) of the identity provider.

This is the URL where the 'AuthnRequest' will be sent. Must use 'HTTPS'.
Assumed to accept the 'HTTP-Redirect' binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#single_sign_on_service_uri GoogleCloudIdentityInboundSamlSsoProfile#single_sign_on_service_uri}

---

##### `ChangePasswordUri`<sup>Optional</sup> <a name="ChangePasswordUri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig.property.changePasswordUri"></a>

```csharp
public string ChangePasswordUri { get; set; }
```

- *Type:* string

The **Change Password URL** of the identity provider.

Users will be sent to this URL
when changing their passwords at 'myaccount.google.com'. This takes precedence over
the change password URL configured at customer-level. Must use 'HTTPS'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#change_password_uri GoogleCloudIdentityInboundSamlSsoProfile#change_password_uri}

---

##### `LogoutRedirectUri`<sup>Optional</sup> <a name="LogoutRedirectUri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig.property.logoutRedirectUri"></a>

```csharp
public string LogoutRedirectUri { get; set; }
```

- *Type:* string

The **Logout Redirect URL** (sign-out page URL) of the identity provider.

When a user
clicks the sign-out link on a Google page, they will be redirected to this URL. This is
a pure redirect with no attached SAML 'LogoutRequest' i.e. SAML single logout is not
supported. Must use 'HTTPS'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#logout_redirect_uri GoogleCloudIdentityInboundSamlSsoProfile#logout_redirect_uri}

---

### GoogleCloudIdentityInboundSamlSsoProfileSpConfig <a name="GoogleCloudIdentityInboundSamlSsoProfileSpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudIdentityInboundSamlSsoProfileSpConfig {

};
```


### GoogleCloudIdentityInboundSamlSsoProfileTimeouts <a name="GoogleCloudIdentityInboundSamlSsoProfileTimeouts" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudIdentityInboundSamlSsoProfileTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#create GoogleCloudIdentityInboundSamlSsoProfile#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#delete GoogleCloudIdentityInboundSamlSsoProfile#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#update GoogleCloudIdentityInboundSamlSsoProfile#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#create GoogleCloudIdentityInboundSamlSsoProfile#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#delete GoogleCloudIdentityInboundSamlSsoProfile#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#update GoogleCloudIdentityInboundSamlSsoProfile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference <a name="GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resetChangePasswordUri">ResetChangePasswordUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resetLogoutRedirectUri">ResetLogoutRedirectUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChangePasswordUri` <a name="ResetChangePasswordUri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resetChangePasswordUri"></a>

```csharp
private void ResetChangePasswordUri()
```

##### `ResetLogoutRedirectUri` <a name="ResetLogoutRedirectUri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resetLogoutRedirectUri"></a>

```csharp
private void ResetLogoutRedirectUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.changePasswordUriInput">ChangePasswordUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.entityIdInput">EntityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.logoutRedirectUriInput">LogoutRedirectUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.singleSignOnServiceUriInput">SingleSignOnServiceUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.changePasswordUri">ChangePasswordUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.entityId">EntityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.logoutRedirectUri">LogoutRedirectUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.singleSignOnServiceUri">SingleSignOnServiceUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig">GoogleCloudIdentityInboundSamlSsoProfileIdpConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChangePasswordUriInput`<sup>Optional</sup> <a name="ChangePasswordUriInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.changePasswordUriInput"></a>

```csharp
public string ChangePasswordUriInput { get; }
```

- *Type:* string

---

##### `EntityIdInput`<sup>Optional</sup> <a name="EntityIdInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.entityIdInput"></a>

```csharp
public string EntityIdInput { get; }
```

- *Type:* string

---

##### `LogoutRedirectUriInput`<sup>Optional</sup> <a name="LogoutRedirectUriInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.logoutRedirectUriInput"></a>

```csharp
public string LogoutRedirectUriInput { get; }
```

- *Type:* string

---

##### `SingleSignOnServiceUriInput`<sup>Optional</sup> <a name="SingleSignOnServiceUriInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.singleSignOnServiceUriInput"></a>

```csharp
public string SingleSignOnServiceUriInput { get; }
```

- *Type:* string

---

##### `ChangePasswordUri`<sup>Required</sup> <a name="ChangePasswordUri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.changePasswordUri"></a>

```csharp
public string ChangePasswordUri { get; }
```

- *Type:* string

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.entityId"></a>

```csharp
public string EntityId { get; }
```

- *Type:* string

---

##### `LogoutRedirectUri`<sup>Required</sup> <a name="LogoutRedirectUri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.logoutRedirectUri"></a>

```csharp
public string LogoutRedirectUri { get; }
```

- *Type:* string

---

##### `SingleSignOnServiceUri`<sup>Required</sup> <a name="SingleSignOnServiceUri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.singleSignOnServiceUri"></a>

```csharp
public string SingleSignOnServiceUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudIdentityInboundSamlSsoProfileIdpConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig">GoogleCloudIdentityInboundSamlSsoProfileIdpConfig</a>

---


### GoogleCloudIdentityInboundSamlSsoProfileSpConfigList <a name="GoogleCloudIdentityInboundSamlSsoProfileSpConfigList" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudIdentityInboundSamlSsoProfileSpConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.get"></a>

```csharp
private GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference <a name="GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.assertionConsumerServiceUri">AssertionConsumerServiceUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.entityId">EntityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfig">GoogleCloudIdentityInboundSamlSsoProfileSpConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AssertionConsumerServiceUri`<sup>Required</sup> <a name="AssertionConsumerServiceUri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.assertionConsumerServiceUri"></a>

```csharp
public string AssertionConsumerServiceUri { get; }
```

- *Type:* string

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.entityId"></a>

```csharp
public string EntityId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudIdentityInboundSamlSsoProfileSpConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfig">GoogleCloudIdentityInboundSamlSsoProfileSpConfig</a>

---


### GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference <a name="GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts">GoogleCloudIdentityInboundSamlSsoProfileTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleCloudIdentityInboundSamlSsoProfileTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts">GoogleCloudIdentityInboundSamlSsoProfileTimeouts</a>

---



