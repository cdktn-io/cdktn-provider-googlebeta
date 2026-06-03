# `googleSecureSourceManagerInstance` Submodule <a name="`googleSecureSourceManagerInstance` Submodule" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSecureSourceManagerInstance <a name="GoogleSecureSourceManagerInstance" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_instance google_secure_source_manager_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleSecureSourceManagerInstance(Construct Scope, string Id, GoogleSecureSourceManagerInstanceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig">GoogleSecureSourceManagerInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig">GoogleSecureSourceManagerInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.putPrivateConfig">PutPrivateConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.putWorkforceIdentityFederationConfig">PutWorkforceIdentityFederationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.resetKmsKey">ResetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.resetPrivateConfig">ResetPrivateConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.resetWorkforceIdentityFederationConfig">ResetWorkforceIdentityFederationConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPrivateConfig` <a name="PutPrivateConfig" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.putPrivateConfig"></a>

```csharp
private void PutPrivateConfig(GoogleSecureSourceManagerInstancePrivateConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.putPrivateConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfig">GoogleSecureSourceManagerInstancePrivateConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleSecureSourceManagerInstanceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeouts">GoogleSecureSourceManagerInstanceTimeouts</a>

---

##### `PutWorkforceIdentityFederationConfig` <a name="PutWorkforceIdentityFederationConfig" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.putWorkforceIdentityFederationConfig"></a>

```csharp
private void PutWorkforceIdentityFederationConfig(GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.putWorkforceIdentityFederationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig">GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.resetKmsKey"></a>

```csharp
private void ResetKmsKey()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetPrivateConfig` <a name="ResetPrivateConfig" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.resetPrivateConfig"></a>

```csharp
private void ResetPrivateConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWorkforceIdentityFederationConfig` <a name="ResetWorkforceIdentityFederationConfig" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.resetWorkforceIdentityFederationConfig"></a>

```csharp
private void ResetWorkforceIdentityFederationConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleSecureSourceManagerInstance resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleSecureSourceManagerInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleSecureSourceManagerInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleSecureSourceManagerInstance.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleSecureSourceManagerInstance.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleSecureSourceManagerInstance resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleSecureSourceManagerInstance to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleSecureSourceManagerInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_instance#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleSecureSourceManagerInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.hostConfig">HostConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList">GoogleSecureSourceManagerInstanceHostConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.privateConfig">PrivateConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference">GoogleSecureSourceManagerInstancePrivateConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.stateNote">StateNote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference">GoogleSecureSourceManagerInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.workforceIdentityFederationConfig">WorkforceIdentityFederationConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference">GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.instanceIdInput">InstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.kmsKeyInput">KmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.privateConfigInput">PrivateConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfig">GoogleSecureSourceManagerInstancePrivateConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeouts">GoogleSecureSourceManagerInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.workforceIdentityFederationConfigInput">WorkforceIdentityFederationConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig">GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.kmsKey">KmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `HostConfig`<sup>Required</sup> <a name="HostConfig" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.hostConfig"></a>

```csharp
public GoogleSecureSourceManagerInstanceHostConfigList HostConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList">GoogleSecureSourceManagerInstanceHostConfigList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PrivateConfig`<sup>Required</sup> <a name="PrivateConfig" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.privateConfig"></a>

```csharp
public GoogleSecureSourceManagerInstancePrivateConfigOutputReference PrivateConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference">GoogleSecureSourceManagerInstancePrivateConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateNote`<sup>Required</sup> <a name="StateNote" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.stateNote"></a>

```csharp
public string StateNote { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.timeouts"></a>

```csharp
public GoogleSecureSourceManagerInstanceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference">GoogleSecureSourceManagerInstanceTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `WorkforceIdentityFederationConfig`<sup>Required</sup> <a name="WorkforceIdentityFederationConfig" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.workforceIdentityFederationConfig"></a>

```csharp
public GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference WorkforceIdentityFederationConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference">GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.instanceIdInput"></a>

```csharp
public string InstanceIdInput { get; }
```

- *Type:* string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.kmsKeyInput"></a>

```csharp
public string KmsKeyInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `PrivateConfigInput`<sup>Optional</sup> <a name="PrivateConfigInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.privateConfigInput"></a>

```csharp
public GoogleSecureSourceManagerInstancePrivateConfig PrivateConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfig">GoogleSecureSourceManagerInstancePrivateConfig</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleSecureSourceManagerInstanceTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeouts">GoogleSecureSourceManagerInstanceTimeouts</a>

---

##### `WorkforceIdentityFederationConfigInput`<sup>Optional</sup> <a name="WorkforceIdentityFederationConfigInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.workforceIdentityFederationConfigInput"></a>

```csharp
public GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig WorkforceIdentityFederationConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig">GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.kmsKey"></a>

```csharp
public string KmsKey { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSecureSourceManagerInstanceConfig <a name="GoogleSecureSourceManagerInstanceConfig" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleSecureSourceManagerInstanceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string InstanceId,
    string Location,
    string DeletionPolicy = null,
    string Id = null,
    string KmsKey = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    GoogleSecureSourceManagerInstancePrivateConfig PrivateConfig = null,
    string Project = null,
    GoogleSecureSourceManagerInstanceTimeouts Timeouts = null,
    GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig WorkforceIdentityFederationConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.instanceId">InstanceId</a></code> | <code>string</code> | The name for the Instance. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.location">Location</a></code> | <code>string</code> | The location for the Instance. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_instance#id GoogleSecureSourceManagerInstance#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.kmsKey">KmsKey</a></code> | <code>string</code> | Customer-managed encryption key name, in the format projects/* /locations/* /keyRings/* /cryptoKeys/*. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.privateConfig">PrivateConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfig">GoogleSecureSourceManagerInstancePrivateConfig</a></code> | private_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_instance#project GoogleSecureSourceManagerInstance#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeouts">GoogleSecureSourceManagerInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.workforceIdentityFederationConfig">WorkforceIdentityFederationConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig">GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig</a></code> | workforce_identity_federation_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.instanceId"></a>

```csharp
public string InstanceId { get; set; }
```

- *Type:* string

The name for the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_instance#instance_id GoogleSecureSourceManagerInstance#instance_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location for the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_instance#location GoogleSecureSourceManagerInstance#location}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "PREVENT".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_instance#deletion_policy GoogleSecureSourceManagerInstance#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_instance#id GoogleSecureSourceManagerInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.kmsKey"></a>

```csharp
public string KmsKey { get; set; }
```

- *Type:* string

Customer-managed encryption key name, in the format projects/* /locations/* /keyRings/* /cryptoKeys/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_instance#kms_key GoogleSecureSourceManagerInstance#kms_key}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_instance#labels GoogleSecureSourceManagerInstance#labels}

---

##### `PrivateConfig`<sup>Optional</sup> <a name="PrivateConfig" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.privateConfig"></a>

```csharp
public GoogleSecureSourceManagerInstancePrivateConfig PrivateConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfig">GoogleSecureSourceManagerInstancePrivateConfig</a>

private_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_instance#private_config GoogleSecureSourceManagerInstance#private_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_instance#project GoogleSecureSourceManagerInstance#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.timeouts"></a>

```csharp
public GoogleSecureSourceManagerInstanceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeouts">GoogleSecureSourceManagerInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_instance#timeouts GoogleSecureSourceManagerInstance#timeouts}

---

##### `WorkforceIdentityFederationConfig`<sup>Optional</sup> <a name="WorkforceIdentityFederationConfig" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.workforceIdentityFederationConfig"></a>

```csharp
public GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig WorkforceIdentityFederationConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig">GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig</a>

workforce_identity_federation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_instance#workforce_identity_federation_config GoogleSecureSourceManagerInstance#workforce_identity_federation_config}

---

### GoogleSecureSourceManagerInstanceHostConfig <a name="GoogleSecureSourceManagerInstanceHostConfig" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleSecureSourceManagerInstanceHostConfig {

};
```


### GoogleSecureSourceManagerInstancePrivateConfig <a name="GoogleSecureSourceManagerInstancePrivateConfig" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleSecureSourceManagerInstancePrivateConfig {
    bool|IResolvable IsPrivate,
    string CaPool = null,
    GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfig CustomHostConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfig.property.isPrivate">IsPrivate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | 'Indicate if it's private instance.'. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfig.property.caPool">CaPool</a></code> | <code>string</code> | CA pool resource, resource must in the format of 'projects/{project}/locations/{location}/caPools/{ca_pool}'. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfig.property.customHostConfig">CustomHostConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfig">GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfig</a></code> | custom_host_config block. |

---

##### `IsPrivate`<sup>Required</sup> <a name="IsPrivate" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfig.property.isPrivate"></a>

```csharp
public bool|IResolvable IsPrivate { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

'Indicate if it's private instance.'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_instance#is_private GoogleSecureSourceManagerInstance#is_private}

---

##### `CaPool`<sup>Optional</sup> <a name="CaPool" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfig.property.caPool"></a>

```csharp
public string CaPool { get; set; }
```

- *Type:* string

CA pool resource, resource must in the format of 'projects/{project}/locations/{location}/caPools/{ca_pool}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_instance#ca_pool GoogleSecureSourceManagerInstance#ca_pool}

---

##### `CustomHostConfig`<sup>Optional</sup> <a name="CustomHostConfig" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfig.property.customHostConfig"></a>

```csharp
public GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfig CustomHostConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfig">GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfig</a>

custom_host_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_instance#custom_host_config GoogleSecureSourceManagerInstance#custom_host_config}

---

### GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfig <a name="GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfig" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfig {
    string Api,
    string GitHttp,
    string GitSsh,
    string Html
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfig.property.api">Api</a></code> | <code>string</code> | API hostname. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfig.property.gitHttp">GitHttp</a></code> | <code>string</code> | Git HTTP hostname. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfig.property.gitSsh">GitSsh</a></code> | <code>string</code> | Git SSH hostname. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfig.property.html">Html</a></code> | <code>string</code> | HTML hostname. |

---

##### `Api`<sup>Required</sup> <a name="Api" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfig.property.api"></a>

```csharp
public string Api { get; set; }
```

- *Type:* string

API hostname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_instance#api GoogleSecureSourceManagerInstance#api}

---

##### `GitHttp`<sup>Required</sup> <a name="GitHttp" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfig.property.gitHttp"></a>

```csharp
public string GitHttp { get; set; }
```

- *Type:* string

Git HTTP hostname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_instance#git_http GoogleSecureSourceManagerInstance#git_http}

---

##### `GitSsh`<sup>Required</sup> <a name="GitSsh" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfig.property.gitSsh"></a>

```csharp
public string GitSsh { get; set; }
```

- *Type:* string

Git SSH hostname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_instance#git_ssh GoogleSecureSourceManagerInstance#git_ssh}

---

##### `Html`<sup>Required</sup> <a name="Html" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfig.property.html"></a>

```csharp
public string Html { get; set; }
```

- *Type:* string

HTML hostname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_instance#html GoogleSecureSourceManagerInstance#html}

---

### GoogleSecureSourceManagerInstanceTimeouts <a name="GoogleSecureSourceManagerInstanceTimeouts" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleSecureSourceManagerInstanceTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_instance#create GoogleSecureSourceManagerInstance#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_instance#delete GoogleSecureSourceManagerInstance#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_instance#update GoogleSecureSourceManagerInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_instance#create GoogleSecureSourceManagerInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_instance#delete GoogleSecureSourceManagerInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_instance#update GoogleSecureSourceManagerInstance#update}.

---

### GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig <a name="GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig {
    bool|IResolvable Enabled
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | 'Whether Workforce Identity Federation is enabled.'. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

'Whether Workforce Identity Federation is enabled.'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_instance#enabled GoogleSecureSourceManagerInstance#enabled}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSecureSourceManagerInstanceHostConfigList <a name="GoogleSecureSourceManagerInstanceHostConfigList" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleSecureSourceManagerInstanceHostConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.get"></a>

```csharp
private GoogleSecureSourceManagerInstanceHostConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleSecureSourceManagerInstanceHostConfigOutputReference <a name="GoogleSecureSourceManagerInstanceHostConfigOutputReference" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleSecureSourceManagerInstanceHostConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.property.api">Api</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.property.gitHttp">GitHttp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.property.gitSsh">GitSsh</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.property.html">Html</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfig">GoogleSecureSourceManagerInstanceHostConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Api`<sup>Required</sup> <a name="Api" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.property.api"></a>

```csharp
public string Api { get; }
```

- *Type:* string

---

##### `GitHttp`<sup>Required</sup> <a name="GitHttp" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.property.gitHttp"></a>

```csharp
public string GitHttp { get; }
```

- *Type:* string

---

##### `GitSsh`<sup>Required</sup> <a name="GitSsh" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.property.gitSsh"></a>

```csharp
public string GitSsh { get; }
```

- *Type:* string

---

##### `Html`<sup>Required</sup> <a name="Html" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.property.html"></a>

```csharp
public string Html { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleSecureSourceManagerInstanceHostConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfig">GoogleSecureSourceManagerInstanceHostConfig</a>

---


### GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference <a name="GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.apiInput">ApiInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.gitHttpInput">GitHttpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.gitSshInput">GitSshInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.htmlInput">HtmlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.api">Api</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.gitHttp">GitHttp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.gitSsh">GitSsh</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.html">Html</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfig">GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiInput`<sup>Optional</sup> <a name="ApiInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.apiInput"></a>

```csharp
public string ApiInput { get; }
```

- *Type:* string

---

##### `GitHttpInput`<sup>Optional</sup> <a name="GitHttpInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.gitHttpInput"></a>

```csharp
public string GitHttpInput { get; }
```

- *Type:* string

---

##### `GitSshInput`<sup>Optional</sup> <a name="GitSshInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.gitSshInput"></a>

```csharp
public string GitSshInput { get; }
```

- *Type:* string

---

##### `HtmlInput`<sup>Optional</sup> <a name="HtmlInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.htmlInput"></a>

```csharp
public string HtmlInput { get; }
```

- *Type:* string

---

##### `Api`<sup>Required</sup> <a name="Api" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.api"></a>

```csharp
public string Api { get; }
```

- *Type:* string

---

##### `GitHttp`<sup>Required</sup> <a name="GitHttp" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.gitHttp"></a>

```csharp
public string GitHttp { get; }
```

- *Type:* string

---

##### `GitSsh`<sup>Required</sup> <a name="GitSsh" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.gitSsh"></a>

```csharp
public string GitSsh { get; }
```

- *Type:* string

---

##### `Html`<sup>Required</sup> <a name="Html" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.html"></a>

```csharp
public string Html { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfig">GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfig</a>

---


### GoogleSecureSourceManagerInstancePrivateConfigOutputReference <a name="GoogleSecureSourceManagerInstancePrivateConfigOutputReference" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleSecureSourceManagerInstancePrivateConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.putCustomHostConfig">PutCustomHostConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.resetCaPool">ResetCaPool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.resetCustomHostConfig">ResetCustomHostConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomHostConfig` <a name="PutCustomHostConfig" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.putCustomHostConfig"></a>

```csharp
private void PutCustomHostConfig(GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.putCustomHostConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfig">GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfig</a>

---

##### `ResetCaPool` <a name="ResetCaPool" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.resetCaPool"></a>

```csharp
private void ResetCaPool()
```

##### `ResetCustomHostConfig` <a name="ResetCustomHostConfig" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.resetCustomHostConfig"></a>

```csharp
private void ResetCustomHostConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.customHostConfig">CustomHostConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference">GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.httpServiceAttachment">HttpServiceAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.sshServiceAttachment">SshServiceAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.caPoolInput">CaPoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.customHostConfigInput">CustomHostConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfig">GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.isPrivateInput">IsPrivateInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.caPool">CaPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.isPrivate">IsPrivate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfig">GoogleSecureSourceManagerInstancePrivateConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomHostConfig`<sup>Required</sup> <a name="CustomHostConfig" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.customHostConfig"></a>

```csharp
public GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference CustomHostConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference">GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference</a>

---

##### `HttpServiceAttachment`<sup>Required</sup> <a name="HttpServiceAttachment" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.httpServiceAttachment"></a>

```csharp
public string HttpServiceAttachment { get; }
```

- *Type:* string

---

##### `SshServiceAttachment`<sup>Required</sup> <a name="SshServiceAttachment" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.sshServiceAttachment"></a>

```csharp
public string SshServiceAttachment { get; }
```

- *Type:* string

---

##### `CaPoolInput`<sup>Optional</sup> <a name="CaPoolInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.caPoolInput"></a>

```csharp
public string CaPoolInput { get; }
```

- *Type:* string

---

##### `CustomHostConfigInput`<sup>Optional</sup> <a name="CustomHostConfigInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.customHostConfigInput"></a>

```csharp
public GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfig CustomHostConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfig">GoogleSecureSourceManagerInstancePrivateConfigCustomHostConfig</a>

---

##### `IsPrivateInput`<sup>Optional</sup> <a name="IsPrivateInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.isPrivateInput"></a>

```csharp
public bool|IResolvable IsPrivateInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CaPool`<sup>Required</sup> <a name="CaPool" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.caPool"></a>

```csharp
public string CaPool { get; }
```

- *Type:* string

---

##### `IsPrivate`<sup>Required</sup> <a name="IsPrivate" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.isPrivate"></a>

```csharp
public bool|IResolvable IsPrivate { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleSecureSourceManagerInstancePrivateConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfig">GoogleSecureSourceManagerInstancePrivateConfig</a>

---


### GoogleSecureSourceManagerInstanceTimeoutsOutputReference <a name="GoogleSecureSourceManagerInstanceTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleSecureSourceManagerInstanceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeouts">GoogleSecureSourceManagerInstanceTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleSecureSourceManagerInstanceTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeouts">GoogleSecureSourceManagerInstanceTimeouts</a>

---


### GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference <a name="GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig">GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig">GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig</a>

---



