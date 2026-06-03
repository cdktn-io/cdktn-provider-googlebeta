# `googlePrivilegedAccessManagerSettings` Submodule <a name="`googlePrivilegedAccessManagerSettings` Submodule" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GooglePrivilegedAccessManagerSettings <a name="GooglePrivilegedAccessManagerSettings" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_privileged_access_manager_settings google_privileged_access_manager_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GooglePrivilegedAccessManagerSettings(Construct Scope, string Id, GooglePrivilegedAccessManagerSettingsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig">GooglePrivilegedAccessManagerSettingsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig">GooglePrivilegedAccessManagerSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.putEmailNotificationSettings">PutEmailNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.putServiceAccountApproverSettings">PutServiceAccountApproverSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.resetEmailNotificationSettings">ResetEmailNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.resetServiceAccountApproverSettings">ResetServiceAccountApproverSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEmailNotificationSettings` <a name="PutEmailNotificationSettings" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.putEmailNotificationSettings"></a>

```csharp
private void PutEmailNotificationSettings(GooglePrivilegedAccessManagerSettingsEmailNotificationSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.putEmailNotificationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings">GooglePrivilegedAccessManagerSettingsEmailNotificationSettings</a>

---

##### `PutServiceAccountApproverSettings` <a name="PutServiceAccountApproverSettings" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.putServiceAccountApproverSettings"></a>

```csharp
private void PutServiceAccountApproverSettings(GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.putServiceAccountApproverSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings">GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.putTimeouts"></a>

```csharp
private void PutTimeouts(GooglePrivilegedAccessManagerSettingsTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts">GooglePrivilegedAccessManagerSettingsTimeouts</a>

---

##### `ResetEmailNotificationSettings` <a name="ResetEmailNotificationSettings" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.resetEmailNotificationSettings"></a>

```csharp
private void ResetEmailNotificationSettings()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetServiceAccountApproverSettings` <a name="ResetServiceAccountApproverSettings" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.resetServiceAccountApproverSettings"></a>

```csharp
private void ResetServiceAccountApproverSettings()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GooglePrivilegedAccessManagerSettings resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GooglePrivilegedAccessManagerSettings.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GooglePrivilegedAccessManagerSettings.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GooglePrivilegedAccessManagerSettings.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GooglePrivilegedAccessManagerSettings.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GooglePrivilegedAccessManagerSettings resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GooglePrivilegedAccessManagerSettings to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GooglePrivilegedAccessManagerSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_privileged_access_manager_settings#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GooglePrivilegedAccessManagerSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.emailNotificationSettings">EmailNotificationSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.serviceAccountApproverSettings">ServiceAccountApproverSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference">GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference">GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.emailNotificationSettingsInput">EmailNotificationSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings">GooglePrivilegedAccessManagerSettingsEmailNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.serviceAccountApproverSettingsInput">ServiceAccountApproverSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings">GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts">GooglePrivilegedAccessManagerSettingsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.parent">Parent</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EmailNotificationSettings`<sup>Required</sup> <a name="EmailNotificationSettings" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.emailNotificationSettings"></a>

```csharp
public GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference EmailNotificationSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ServiceAccountApproverSettings`<sup>Required</sup> <a name="ServiceAccountApproverSettings" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.serviceAccountApproverSettings"></a>

```csharp
public GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference ServiceAccountApproverSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference">GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.timeouts"></a>

```csharp
public GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference">GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `EmailNotificationSettingsInput`<sup>Optional</sup> <a name="EmailNotificationSettingsInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.emailNotificationSettingsInput"></a>

```csharp
public GooglePrivilegedAccessManagerSettingsEmailNotificationSettings EmailNotificationSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings">GooglePrivilegedAccessManagerSettingsEmailNotificationSettings</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `ServiceAccountApproverSettingsInput`<sup>Optional</sup> <a name="ServiceAccountApproverSettingsInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.serviceAccountApproverSettingsInput"></a>

```csharp
public GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings ServiceAccountApproverSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings">GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.timeoutsInput"></a>

```csharp
public IResolvable|GooglePrivilegedAccessManagerSettingsTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts">GooglePrivilegedAccessManagerSettingsTimeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GooglePrivilegedAccessManagerSettingsConfig <a name="GooglePrivilegedAccessManagerSettingsConfig" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GooglePrivilegedAccessManagerSettingsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string Parent,
    GooglePrivilegedAccessManagerSettingsEmailNotificationSettings EmailNotificationSettings = null,
    string Id = null,
    GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings ServiceAccountApproverSettings = null,
    GooglePrivilegedAccessManagerSettingsTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.location">Location</a></code> | <code>string</code> | The region of the PAM settings resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.parent">Parent</a></code> | <code>string</code> | Format: projects/{project-id\|project-number} or organizations/{organization-number} or folders/{folder-number}. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.emailNotificationSettings">EmailNotificationSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings">GooglePrivilegedAccessManagerSettingsEmailNotificationSettings</a></code> | email_notification_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_privileged_access_manager_settings#id GooglePrivilegedAccessManagerSettings#id}. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.serviceAccountApproverSettings">ServiceAccountApproverSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings">GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings</a></code> | service_account_approver_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts">GooglePrivilegedAccessManagerSettingsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The region of the PAM settings resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_privileged_access_manager_settings#location GooglePrivilegedAccessManagerSettings#location}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

Format: projects/{project-id|project-number} or organizations/{organization-number} or folders/{folder-number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_privileged_access_manager_settings#parent GooglePrivilegedAccessManagerSettings#parent}

---

##### `EmailNotificationSettings`<sup>Optional</sup> <a name="EmailNotificationSettings" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.emailNotificationSettings"></a>

```csharp
public GooglePrivilegedAccessManagerSettingsEmailNotificationSettings EmailNotificationSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings">GooglePrivilegedAccessManagerSettingsEmailNotificationSettings</a>

email_notification_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_privileged_access_manager_settings#email_notification_settings GooglePrivilegedAccessManagerSettings#email_notification_settings}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_privileged_access_manager_settings#id GooglePrivilegedAccessManagerSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ServiceAccountApproverSettings`<sup>Optional</sup> <a name="ServiceAccountApproverSettings" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.serviceAccountApproverSettings"></a>

```csharp
public GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings ServiceAccountApproverSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings">GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings</a>

service_account_approver_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_privileged_access_manager_settings#service_account_approver_settings GooglePrivilegedAccessManagerSettings#service_account_approver_settings}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.timeouts"></a>

```csharp
public GooglePrivilegedAccessManagerSettingsTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts">GooglePrivilegedAccessManagerSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_privileged_access_manager_settings#timeouts GooglePrivilegedAccessManagerSettings#timeouts}

---

### GooglePrivilegedAccessManagerSettingsEmailNotificationSettings <a name="GooglePrivilegedAccessManagerSettingsEmailNotificationSettings" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GooglePrivilegedAccessManagerSettingsEmailNotificationSettings {
    GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior CustomNotificationBehavior = null,
    GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications DisableAllNotifications = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings.property.customNotificationBehavior">CustomNotificationBehavior</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior</a></code> | custom_notification_behavior block. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings.property.disableAllNotifications">DisableAllNotifications</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications</a></code> | disable_all_notifications block. |

---

##### `CustomNotificationBehavior`<sup>Optional</sup> <a name="CustomNotificationBehavior" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings.property.customNotificationBehavior"></a>

```csharp
public GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior CustomNotificationBehavior { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior</a>

custom_notification_behavior block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_privileged_access_manager_settings#custom_notification_behavior GooglePrivilegedAccessManagerSettings#custom_notification_behavior}

---

##### `DisableAllNotifications`<sup>Optional</sup> <a name="DisableAllNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings.property.disableAllNotifications"></a>

```csharp
public GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications DisableAllNotifications { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications</a>

disable_all_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_privileged_access_manager_settings#disable_all_notifications GooglePrivilegedAccessManagerSettings#disable_all_notifications}

---

### GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior <a name="GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior {
    GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications AdminNotifications = null,
    GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications ApproverNotifications = null,
    GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications RequesterNotifications = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior.property.adminNotifications">AdminNotifications</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications</a></code> | admin_notifications block. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior.property.approverNotifications">ApproverNotifications</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications</a></code> | approver_notifications block. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior.property.requesterNotifications">RequesterNotifications</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications</a></code> | requester_notifications block. |

---

##### `AdminNotifications`<sup>Optional</sup> <a name="AdminNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior.property.adminNotifications"></a>

```csharp
public GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications AdminNotifications { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications</a>

admin_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_privileged_access_manager_settings#admin_notifications GooglePrivilegedAccessManagerSettings#admin_notifications}

---

##### `ApproverNotifications`<sup>Optional</sup> <a name="ApproverNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior.property.approverNotifications"></a>

```csharp
public GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications ApproverNotifications { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications</a>

approver_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_privileged_access_manager_settings#approver_notifications GooglePrivilegedAccessManagerSettings#approver_notifications}

---

##### `RequesterNotifications`<sup>Optional</sup> <a name="RequesterNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior.property.requesterNotifications"></a>

```csharp
public GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications RequesterNotifications { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications</a>

requester_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_privileged_access_manager_settings#requester_notifications GooglePrivilegedAccessManagerSettings#requester_notifications}

---

### GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications <a name="GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications {
    string GrantActivated = null,
    string GrantActivationFailed = null,
    string GrantEnded = null,
    string GrantExternallyModified = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications.property.grantActivated">GrantActivated</a></code> | <code>string</code> | Notification mode for grant activated. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications.property.grantActivationFailed">GrantActivationFailed</a></code> | <code>string</code> | Notification mode for grant activation failed. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications.property.grantEnded">GrantEnded</a></code> | <code>string</code> | Notification mode for grant ended. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications.property.grantExternallyModified">GrantExternallyModified</a></code> | <code>string</code> | Notification mode for grant externally modified. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]. |

---

##### `GrantActivated`<sup>Optional</sup> <a name="GrantActivated" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications.property.grantActivated"></a>

```csharp
public string GrantActivated { get; set; }
```

- *Type:* string

Notification mode for grant activated. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_privileged_access_manager_settings#grant_activated GooglePrivilegedAccessManagerSettings#grant_activated}

---

##### `GrantActivationFailed`<sup>Optional</sup> <a name="GrantActivationFailed" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications.property.grantActivationFailed"></a>

```csharp
public string GrantActivationFailed { get; set; }
```

- *Type:* string

Notification mode for grant activation failed. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_privileged_access_manager_settings#grant_activation_failed GooglePrivilegedAccessManagerSettings#grant_activation_failed}

---

##### `GrantEnded`<sup>Optional</sup> <a name="GrantEnded" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications.property.grantEnded"></a>

```csharp
public string GrantEnded { get; set; }
```

- *Type:* string

Notification mode for grant ended. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_privileged_access_manager_settings#grant_ended GooglePrivilegedAccessManagerSettings#grant_ended}

---

##### `GrantExternallyModified`<sup>Optional</sup> <a name="GrantExternallyModified" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications.property.grantExternallyModified"></a>

```csharp
public string GrantExternallyModified { get; set; }
```

- *Type:* string

Notification mode for grant externally modified. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_privileged_access_manager_settings#grant_externally_modified GooglePrivilegedAccessManagerSettings#grant_externally_modified}

---

### GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications <a name="GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications {
    string PendingApproval = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications.property.pendingApproval">PendingApproval</a></code> | <code>string</code> | Notification mode for pending approval. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]. |

---

##### `PendingApproval`<sup>Optional</sup> <a name="PendingApproval" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications.property.pendingApproval"></a>

```csharp
public string PendingApproval { get; set; }
```

- *Type:* string

Notification mode for pending approval. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_privileged_access_manager_settings#pending_approval GooglePrivilegedAccessManagerSettings#pending_approval}

---

### GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications <a name="GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications {
    string EntitlementAssigned = null,
    string GrantActivated = null,
    string GrantActivationFailed = null,
    string GrantDenied = null,
    string GrantEnded = null,
    string GrantExpired = null,
    string GrantExternallyModified = null,
    string GrantRevoked = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.entitlementAssigned">EntitlementAssigned</a></code> | <code>string</code> | Notification mode for entitlement assigned. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantActivated">GrantActivated</a></code> | <code>string</code> | Notification mode for grant activated. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantActivationFailed">GrantActivationFailed</a></code> | <code>string</code> | Notification mode for grant activation failed. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantDenied">GrantDenied</a></code> | <code>string</code> | Notification mode for grant denied. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantEnded">GrantEnded</a></code> | <code>string</code> | Notification mode for grant ended. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantExpired">GrantExpired</a></code> | <code>string</code> | Notification mode for grant expired. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantExternallyModified">GrantExternallyModified</a></code> | <code>string</code> | Notification mode for grant externally modified. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantRevoked">GrantRevoked</a></code> | <code>string</code> | Notification mode for grant revoked. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]. |

---

##### `EntitlementAssigned`<sup>Optional</sup> <a name="EntitlementAssigned" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.entitlementAssigned"></a>

```csharp
public string EntitlementAssigned { get; set; }
```

- *Type:* string

Notification mode for entitlement assigned. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_privileged_access_manager_settings#entitlement_assigned GooglePrivilegedAccessManagerSettings#entitlement_assigned}

---

##### `GrantActivated`<sup>Optional</sup> <a name="GrantActivated" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantActivated"></a>

```csharp
public string GrantActivated { get; set; }
```

- *Type:* string

Notification mode for grant activated. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_privileged_access_manager_settings#grant_activated GooglePrivilegedAccessManagerSettings#grant_activated}

---

##### `GrantActivationFailed`<sup>Optional</sup> <a name="GrantActivationFailed" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantActivationFailed"></a>

```csharp
public string GrantActivationFailed { get; set; }
```

- *Type:* string

Notification mode for grant activation failed. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_privileged_access_manager_settings#grant_activation_failed GooglePrivilegedAccessManagerSettings#grant_activation_failed}

---

##### `GrantDenied`<sup>Optional</sup> <a name="GrantDenied" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantDenied"></a>

```csharp
public string GrantDenied { get; set; }
```

- *Type:* string

Notification mode for grant denied. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_privileged_access_manager_settings#grant_denied GooglePrivilegedAccessManagerSettings#grant_denied}

---

##### `GrantEnded`<sup>Optional</sup> <a name="GrantEnded" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantEnded"></a>

```csharp
public string GrantEnded { get; set; }
```

- *Type:* string

Notification mode for grant ended. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_privileged_access_manager_settings#grant_ended GooglePrivilegedAccessManagerSettings#grant_ended}

---

##### `GrantExpired`<sup>Optional</sup> <a name="GrantExpired" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantExpired"></a>

```csharp
public string GrantExpired { get; set; }
```

- *Type:* string

Notification mode for grant expired. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_privileged_access_manager_settings#grant_expired GooglePrivilegedAccessManagerSettings#grant_expired}

---

##### `GrantExternallyModified`<sup>Optional</sup> <a name="GrantExternallyModified" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantExternallyModified"></a>

```csharp
public string GrantExternallyModified { get; set; }
```

- *Type:* string

Notification mode for grant externally modified. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_privileged_access_manager_settings#grant_externally_modified GooglePrivilegedAccessManagerSettings#grant_externally_modified}

---

##### `GrantRevoked`<sup>Optional</sup> <a name="GrantRevoked" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantRevoked"></a>

```csharp
public string GrantRevoked { get; set; }
```

- *Type:* string

Notification mode for grant revoked. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_privileged_access_manager_settings#grant_revoked GooglePrivilegedAccessManagerSettings#grant_revoked}

---

### GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications <a name="GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications {

};
```


### GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings <a name="GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings {
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether service account is allowed to grant approvals. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether service account is allowed to grant approvals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_privileged_access_manager_settings#enabled GooglePrivilegedAccessManagerSettings#enabled}

---

### GooglePrivilegedAccessManagerSettingsTimeouts <a name="GooglePrivilegedAccessManagerSettingsTimeouts" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GooglePrivilegedAccessManagerSettingsTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_privileged_access_manager_settings#create GooglePrivilegedAccessManagerSettings#create}. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_privileged_access_manager_settings#delete GooglePrivilegedAccessManagerSettings#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_privileged_access_manager_settings#update GooglePrivilegedAccessManagerSettings#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_privileged_access_manager_settings#create GooglePrivilegedAccessManagerSettings#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_privileged_access_manager_settings#delete GooglePrivilegedAccessManagerSettings#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_privileged_access_manager_settings#update GooglePrivilegedAccessManagerSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference <a name="GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.resetGrantActivated">ResetGrantActivated</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.resetGrantActivationFailed">ResetGrantActivationFailed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.resetGrantEnded">ResetGrantEnded</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.resetGrantExternallyModified">ResetGrantExternallyModified</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGrantActivated` <a name="ResetGrantActivated" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.resetGrantActivated"></a>

```csharp
private void ResetGrantActivated()
```

##### `ResetGrantActivationFailed` <a name="ResetGrantActivationFailed" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.resetGrantActivationFailed"></a>

```csharp
private void ResetGrantActivationFailed()
```

##### `ResetGrantEnded` <a name="ResetGrantEnded" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.resetGrantEnded"></a>

```csharp
private void ResetGrantEnded()
```

##### `ResetGrantExternallyModified` <a name="ResetGrantExternallyModified" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.resetGrantExternallyModified"></a>

```csharp
private void ResetGrantExternallyModified()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantActivatedInput">GrantActivatedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantActivationFailedInput">GrantActivationFailedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantEndedInput">GrantEndedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantExternallyModifiedInput">GrantExternallyModifiedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantActivated">GrantActivated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantActivationFailed">GrantActivationFailed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantEnded">GrantEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantExternallyModified">GrantExternallyModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GrantActivatedInput`<sup>Optional</sup> <a name="GrantActivatedInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantActivatedInput"></a>

```csharp
public string GrantActivatedInput { get; }
```

- *Type:* string

---

##### `GrantActivationFailedInput`<sup>Optional</sup> <a name="GrantActivationFailedInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantActivationFailedInput"></a>

```csharp
public string GrantActivationFailedInput { get; }
```

- *Type:* string

---

##### `GrantEndedInput`<sup>Optional</sup> <a name="GrantEndedInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantEndedInput"></a>

```csharp
public string GrantEndedInput { get; }
```

- *Type:* string

---

##### `GrantExternallyModifiedInput`<sup>Optional</sup> <a name="GrantExternallyModifiedInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantExternallyModifiedInput"></a>

```csharp
public string GrantExternallyModifiedInput { get; }
```

- *Type:* string

---

##### `GrantActivated`<sup>Required</sup> <a name="GrantActivated" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantActivated"></a>

```csharp
public string GrantActivated { get; }
```

- *Type:* string

---

##### `GrantActivationFailed`<sup>Required</sup> <a name="GrantActivationFailed" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantActivationFailed"></a>

```csharp
public string GrantActivationFailed { get; }
```

- *Type:* string

---

##### `GrantEnded`<sup>Required</sup> <a name="GrantEnded" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantEnded"></a>

```csharp
public string GrantEnded { get; }
```

- *Type:* string

---

##### `GrantExternallyModified`<sup>Required</sup> <a name="GrantExternallyModified" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantExternallyModified"></a>

```csharp
public string GrantExternallyModified { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.internalValue"></a>

```csharp
public GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications</a>

---


### GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference <a name="GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.resetPendingApproval">ResetPendingApproval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPendingApproval` <a name="ResetPendingApproval" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.resetPendingApproval"></a>

```csharp
private void ResetPendingApproval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.property.pendingApprovalInput">PendingApprovalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.property.pendingApproval">PendingApproval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PendingApprovalInput`<sup>Optional</sup> <a name="PendingApprovalInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.property.pendingApprovalInput"></a>

```csharp
public string PendingApprovalInput { get; }
```

- *Type:* string

---

##### `PendingApproval`<sup>Required</sup> <a name="PendingApproval" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.property.pendingApproval"></a>

```csharp
public string PendingApproval { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.property.internalValue"></a>

```csharp
public GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications</a>

---


### GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference <a name="GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.putAdminNotifications">PutAdminNotifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.putApproverNotifications">PutApproverNotifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.putRequesterNotifications">PutRequesterNotifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.resetAdminNotifications">ResetAdminNotifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.resetApproverNotifications">ResetApproverNotifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.resetRequesterNotifications">ResetRequesterNotifications</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdminNotifications` <a name="PutAdminNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.putAdminNotifications"></a>

```csharp
private void PutAdminNotifications(GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.putAdminNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications</a>

---

##### `PutApproverNotifications` <a name="PutApproverNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.putApproverNotifications"></a>

```csharp
private void PutApproverNotifications(GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.putApproverNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications</a>

---

##### `PutRequesterNotifications` <a name="PutRequesterNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.putRequesterNotifications"></a>

```csharp
private void PutRequesterNotifications(GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.putRequesterNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications</a>

---

##### `ResetAdminNotifications` <a name="ResetAdminNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.resetAdminNotifications"></a>

```csharp
private void ResetAdminNotifications()
```

##### `ResetApproverNotifications` <a name="ResetApproverNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.resetApproverNotifications"></a>

```csharp
private void ResetApproverNotifications()
```

##### `ResetRequesterNotifications` <a name="ResetRequesterNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.resetRequesterNotifications"></a>

```csharp
private void ResetRequesterNotifications()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.adminNotifications">AdminNotifications</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.approverNotifications">ApproverNotifications</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.requesterNotifications">RequesterNotifications</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.adminNotificationsInput">AdminNotificationsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.approverNotificationsInput">ApproverNotificationsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.requesterNotificationsInput">RequesterNotificationsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdminNotifications`<sup>Required</sup> <a name="AdminNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.adminNotifications"></a>

```csharp
public GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference AdminNotifications { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference</a>

---

##### `ApproverNotifications`<sup>Required</sup> <a name="ApproverNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.approverNotifications"></a>

```csharp
public GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference ApproverNotifications { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference</a>

---

##### `RequesterNotifications`<sup>Required</sup> <a name="RequesterNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.requesterNotifications"></a>

```csharp
public GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference RequesterNotifications { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference</a>

---

##### `AdminNotificationsInput`<sup>Optional</sup> <a name="AdminNotificationsInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.adminNotificationsInput"></a>

```csharp
public GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications AdminNotificationsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications</a>

---

##### `ApproverNotificationsInput`<sup>Optional</sup> <a name="ApproverNotificationsInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.approverNotificationsInput"></a>

```csharp
public GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications ApproverNotificationsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications</a>

---

##### `RequesterNotificationsInput`<sup>Optional</sup> <a name="RequesterNotificationsInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.requesterNotificationsInput"></a>

```csharp
public GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications RequesterNotificationsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.internalValue"></a>

```csharp
public GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior</a>

---


### GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference <a name="GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetEntitlementAssigned">ResetEntitlementAssigned</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantActivated">ResetGrantActivated</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantActivationFailed">ResetGrantActivationFailed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantDenied">ResetGrantDenied</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantEnded">ResetGrantEnded</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantExpired">ResetGrantExpired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantExternallyModified">ResetGrantExternallyModified</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantRevoked">ResetGrantRevoked</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEntitlementAssigned` <a name="ResetEntitlementAssigned" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetEntitlementAssigned"></a>

```csharp
private void ResetEntitlementAssigned()
```

##### `ResetGrantActivated` <a name="ResetGrantActivated" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantActivated"></a>

```csharp
private void ResetGrantActivated()
```

##### `ResetGrantActivationFailed` <a name="ResetGrantActivationFailed" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantActivationFailed"></a>

```csharp
private void ResetGrantActivationFailed()
```

##### `ResetGrantDenied` <a name="ResetGrantDenied" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantDenied"></a>

```csharp
private void ResetGrantDenied()
```

##### `ResetGrantEnded` <a name="ResetGrantEnded" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantEnded"></a>

```csharp
private void ResetGrantEnded()
```

##### `ResetGrantExpired` <a name="ResetGrantExpired" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantExpired"></a>

```csharp
private void ResetGrantExpired()
```

##### `ResetGrantExternallyModified` <a name="ResetGrantExternallyModified" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantExternallyModified"></a>

```csharp
private void ResetGrantExternallyModified()
```

##### `ResetGrantRevoked` <a name="ResetGrantRevoked" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantRevoked"></a>

```csharp
private void ResetGrantRevoked()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.entitlementAssignedInput">EntitlementAssignedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantActivatedInput">GrantActivatedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantActivationFailedInput">GrantActivationFailedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantDeniedInput">GrantDeniedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantEndedInput">GrantEndedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantExpiredInput">GrantExpiredInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantExternallyModifiedInput">GrantExternallyModifiedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantRevokedInput">GrantRevokedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.entitlementAssigned">EntitlementAssigned</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantActivated">GrantActivated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantActivationFailed">GrantActivationFailed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantDenied">GrantDenied</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantEnded">GrantEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantExpired">GrantExpired</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantExternallyModified">GrantExternallyModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantRevoked">GrantRevoked</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EntitlementAssignedInput`<sup>Optional</sup> <a name="EntitlementAssignedInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.entitlementAssignedInput"></a>

```csharp
public string EntitlementAssignedInput { get; }
```

- *Type:* string

---

##### `GrantActivatedInput`<sup>Optional</sup> <a name="GrantActivatedInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantActivatedInput"></a>

```csharp
public string GrantActivatedInput { get; }
```

- *Type:* string

---

##### `GrantActivationFailedInput`<sup>Optional</sup> <a name="GrantActivationFailedInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantActivationFailedInput"></a>

```csharp
public string GrantActivationFailedInput { get; }
```

- *Type:* string

---

##### `GrantDeniedInput`<sup>Optional</sup> <a name="GrantDeniedInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantDeniedInput"></a>

```csharp
public string GrantDeniedInput { get; }
```

- *Type:* string

---

##### `GrantEndedInput`<sup>Optional</sup> <a name="GrantEndedInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantEndedInput"></a>

```csharp
public string GrantEndedInput { get; }
```

- *Type:* string

---

##### `GrantExpiredInput`<sup>Optional</sup> <a name="GrantExpiredInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantExpiredInput"></a>

```csharp
public string GrantExpiredInput { get; }
```

- *Type:* string

---

##### `GrantExternallyModifiedInput`<sup>Optional</sup> <a name="GrantExternallyModifiedInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantExternallyModifiedInput"></a>

```csharp
public string GrantExternallyModifiedInput { get; }
```

- *Type:* string

---

##### `GrantRevokedInput`<sup>Optional</sup> <a name="GrantRevokedInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantRevokedInput"></a>

```csharp
public string GrantRevokedInput { get; }
```

- *Type:* string

---

##### `EntitlementAssigned`<sup>Required</sup> <a name="EntitlementAssigned" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.entitlementAssigned"></a>

```csharp
public string EntitlementAssigned { get; }
```

- *Type:* string

---

##### `GrantActivated`<sup>Required</sup> <a name="GrantActivated" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantActivated"></a>

```csharp
public string GrantActivated { get; }
```

- *Type:* string

---

##### `GrantActivationFailed`<sup>Required</sup> <a name="GrantActivationFailed" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantActivationFailed"></a>

```csharp
public string GrantActivationFailed { get; }
```

- *Type:* string

---

##### `GrantDenied`<sup>Required</sup> <a name="GrantDenied" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantDenied"></a>

```csharp
public string GrantDenied { get; }
```

- *Type:* string

---

##### `GrantEnded`<sup>Required</sup> <a name="GrantEnded" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantEnded"></a>

```csharp
public string GrantEnded { get; }
```

- *Type:* string

---

##### `GrantExpired`<sup>Required</sup> <a name="GrantExpired" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantExpired"></a>

```csharp
public string GrantExpired { get; }
```

- *Type:* string

---

##### `GrantExternallyModified`<sup>Required</sup> <a name="GrantExternallyModified" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantExternallyModified"></a>

```csharp
public string GrantExternallyModified { get; }
```

- *Type:* string

---

##### `GrantRevoked`<sup>Required</sup> <a name="GrantRevoked" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantRevoked"></a>

```csharp
public string GrantRevoked { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.internalValue"></a>

```csharp
public GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications</a>

---


### GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference <a name="GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.property.internalValue"></a>

```csharp
public GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications</a>

---


### GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference <a name="GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.putCustomNotificationBehavior">PutCustomNotificationBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.putDisableAllNotifications">PutDisableAllNotifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.resetCustomNotificationBehavior">ResetCustomNotificationBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.resetDisableAllNotifications">ResetDisableAllNotifications</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomNotificationBehavior` <a name="PutCustomNotificationBehavior" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.putCustomNotificationBehavior"></a>

```csharp
private void PutCustomNotificationBehavior(GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.putCustomNotificationBehavior.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior</a>

---

##### `PutDisableAllNotifications` <a name="PutDisableAllNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.putDisableAllNotifications"></a>

```csharp
private void PutDisableAllNotifications(GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.putDisableAllNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications</a>

---

##### `ResetCustomNotificationBehavior` <a name="ResetCustomNotificationBehavior" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.resetCustomNotificationBehavior"></a>

```csharp
private void ResetCustomNotificationBehavior()
```

##### `ResetDisableAllNotifications` <a name="ResetDisableAllNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.resetDisableAllNotifications"></a>

```csharp
private void ResetDisableAllNotifications()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.customNotificationBehavior">CustomNotificationBehavior</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.disableAllNotifications">DisableAllNotifications</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.customNotificationBehaviorInput">CustomNotificationBehaviorInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.disableAllNotificationsInput">DisableAllNotificationsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings">GooglePrivilegedAccessManagerSettingsEmailNotificationSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomNotificationBehavior`<sup>Required</sup> <a name="CustomNotificationBehavior" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.customNotificationBehavior"></a>

```csharp
public GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference CustomNotificationBehavior { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference</a>

---

##### `DisableAllNotifications`<sup>Required</sup> <a name="DisableAllNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.disableAllNotifications"></a>

```csharp
public GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference DisableAllNotifications { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference</a>

---

##### `CustomNotificationBehaviorInput`<sup>Optional</sup> <a name="CustomNotificationBehaviorInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.customNotificationBehaviorInput"></a>

```csharp
public GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior CustomNotificationBehaviorInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior</a>

---

##### `DisableAllNotificationsInput`<sup>Optional</sup> <a name="DisableAllNotificationsInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.disableAllNotificationsInput"></a>

```csharp
public GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications DisableAllNotificationsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.internalValue"></a>

```csharp
public GooglePrivilegedAccessManagerSettingsEmailNotificationSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings">GooglePrivilegedAccessManagerSettingsEmailNotificationSettings</a>

---


### GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference <a name="GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings">GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.property.internalValue"></a>

```csharp
public GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings">GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings</a>

---


### GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference <a name="GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts">GooglePrivilegedAccessManagerSettingsTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GooglePrivilegedAccessManagerSettingsTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts">GooglePrivilegedAccessManagerSettingsTimeouts</a>

---



