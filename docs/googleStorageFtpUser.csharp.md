# `googleStorageFtpUser` Submodule <a name="`googleStorageFtpUser` Submodule" id="@cdktn/provider-google-beta.googleStorageFtpUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleStorageFtpUser <a name="GoogleStorageFtpUser" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user google_storage_ftp_user}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleStorageFtpUser(Construct Scope, string Id, GoogleStorageFtpUserConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig">GoogleStorageFtpUserConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig">GoogleStorageFtpUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.putStorageDirectoryMappings">PutStorageDirectoryMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.putUserCredentials">PutUserCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.resetStorageDirectoryMappings">ResetStorageDirectoryMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.resetUserCredentials">ResetUserCredentials</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutStorageDirectoryMappings` <a name="PutStorageDirectoryMappings" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.putStorageDirectoryMappings"></a>

```csharp
private void PutStorageDirectoryMappings(IResolvable|GoogleStorageFtpUserStorageDirectoryMappings[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.putStorageDirectoryMappings.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings">GoogleStorageFtpUserStorageDirectoryMappings</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleStorageFtpUserTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeouts">GoogleStorageFtpUserTimeouts</a>

---

##### `PutUserCredentials` <a name="PutUserCredentials" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.putUserCredentials"></a>

```csharp
private void PutUserCredentials(IResolvable|GoogleStorageFtpUserUserCredentials[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.putUserCredentials.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentials">GoogleStorageFtpUserUserCredentials</a>[]

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetStorageDirectoryMappings` <a name="ResetStorageDirectoryMappings" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.resetStorageDirectoryMappings"></a>

```csharp
private void ResetStorageDirectoryMappings()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUserCredentials` <a name="ResetUserCredentials" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.resetUserCredentials"></a>

```csharp
private void ResetUserCredentials()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleStorageFtpUser resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleStorageFtpUser.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleStorageFtpUser.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleStorageFtpUser.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleStorageFtpUser.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleStorageFtpUser resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleStorageFtpUser to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleStorageFtpUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleStorageFtpUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.storageDirectoryMappings">StorageDirectoryMappings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList">GoogleStorageFtpUserStorageDirectoryMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference">GoogleStorageFtpUserTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.userCredentials">UserCredentials</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList">GoogleStorageFtpUserUserCredentialsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.customerServiceAccountInput">CustomerServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.serverIdInput">ServerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.storageDirectoryMappingsInput">StorageDirectoryMappingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings">GoogleStorageFtpUserStorageDirectoryMappings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeouts">GoogleStorageFtpUserTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.userCredentialsInput">UserCredentialsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentials">GoogleStorageFtpUserUserCredentials</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.userIdInput">UserIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.customerServiceAccount">CustomerServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.serverId">ServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.userId">UserId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StorageDirectoryMappings`<sup>Required</sup> <a name="StorageDirectoryMappings" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.storageDirectoryMappings"></a>

```csharp
public GoogleStorageFtpUserStorageDirectoryMappingsList StorageDirectoryMappings { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList">GoogleStorageFtpUserStorageDirectoryMappingsList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.timeouts"></a>

```csharp
public GoogleStorageFtpUserTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference">GoogleStorageFtpUserTimeoutsOutputReference</a>

---

##### `UserCredentials`<sup>Required</sup> <a name="UserCredentials" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.userCredentials"></a>

```csharp
public GoogleStorageFtpUserUserCredentialsList UserCredentials { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList">GoogleStorageFtpUserUserCredentialsList</a>

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `CustomerServiceAccountInput`<sup>Optional</sup> <a name="CustomerServiceAccountInput" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.customerServiceAccountInput"></a>

```csharp
public string CustomerServiceAccountInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ServerIdInput`<sup>Optional</sup> <a name="ServerIdInput" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.serverIdInput"></a>

```csharp
public string ServerIdInput { get; }
```

- *Type:* string

---

##### `StorageDirectoryMappingsInput`<sup>Optional</sup> <a name="StorageDirectoryMappingsInput" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.storageDirectoryMappingsInput"></a>

```csharp
public IResolvable|GoogleStorageFtpUserStorageDirectoryMappings[] StorageDirectoryMappingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings">GoogleStorageFtpUserStorageDirectoryMappings</a>[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleStorageFtpUserTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeouts">GoogleStorageFtpUserTimeouts</a>

---

##### `UserCredentialsInput`<sup>Optional</sup> <a name="UserCredentialsInput" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.userCredentialsInput"></a>

```csharp
public IResolvable|GoogleStorageFtpUserUserCredentials[] UserCredentialsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentials">GoogleStorageFtpUserUserCredentials</a>[]

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.userIdInput"></a>

```csharp
public string UserIdInput { get; }
```

- *Type:* string

---

##### `CustomerServiceAccount`<sup>Required</sup> <a name="CustomerServiceAccount" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.customerServiceAccount"></a>

```csharp
public string CustomerServiceAccount { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.serverId"></a>

```csharp
public string ServerId { get; }
```

- *Type:* string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.userId"></a>

```csharp
public string UserId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleStorageFtpUserConfig <a name="GoogleStorageFtpUserConfig" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleStorageFtpUserConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CustomerServiceAccount,
    string Location,
    string ServerId,
    string UserId,
    string DeletionPolicy = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    IResolvable|GoogleStorageFtpUserStorageDirectoryMappings[] StorageDirectoryMappings = null,
    GoogleStorageFtpUserTimeouts Timeouts = null,
    IResolvable|GoogleStorageFtpUserUserCredentials[] UserCredentials = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.customerServiceAccount">CustomerServiceAccount</a></code> | <code>string</code> | The email address of the service account associated with the user. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.location">Location</a></code> | <code>string</code> | The location (region) of the Storage FTP User. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.serverId">ServerId</a></code> | <code>string</code> | The ID of the server. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.userId">UserId</a></code> | <code>string</code> | The unique ID for the user. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#id GoogleStorageFtpUser#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Resource labels that can contain user-provided metadata. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#project GoogleStorageFtpUser#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.storageDirectoryMappings">StorageDirectoryMappings</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings">GoogleStorageFtpUserStorageDirectoryMappings</a>[]</code> | storage_directory_mappings block. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeouts">GoogleStorageFtpUserTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.userCredentials">UserCredentials</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentials">GoogleStorageFtpUserUserCredentials</a>[]</code> | user_credentials block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CustomerServiceAccount`<sup>Required</sup> <a name="CustomerServiceAccount" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.customerServiceAccount"></a>

```csharp
public string CustomerServiceAccount { get; set; }
```

- *Type:* string

The email address of the service account associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#customer_service_account GoogleStorageFtpUser#customer_service_account}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location (region) of the Storage FTP User.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#location GoogleStorageFtpUser#location}

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.serverId"></a>

```csharp
public string ServerId { get; set; }
```

- *Type:* string

The ID of the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#server_id GoogleStorageFtpUser#server_id}

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.userId"></a>

```csharp
public string UserId { get; set; }
```

- *Type:* string

The unique ID for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#user_id GoogleStorageFtpUser#user_id}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#deletion_policy GoogleStorageFtpUser#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#id GoogleStorageFtpUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Resource labels that can contain user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#labels GoogleStorageFtpUser#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#project GoogleStorageFtpUser#project}.

---

##### `StorageDirectoryMappings`<sup>Optional</sup> <a name="StorageDirectoryMappings" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.storageDirectoryMappings"></a>

```csharp
public IResolvable|GoogleStorageFtpUserStorageDirectoryMappings[] StorageDirectoryMappings { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings">GoogleStorageFtpUserStorageDirectoryMappings</a>[]

storage_directory_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#storage_directory_mappings GoogleStorageFtpUser#storage_directory_mappings}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.timeouts"></a>

```csharp
public GoogleStorageFtpUserTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeouts">GoogleStorageFtpUserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#timeouts GoogleStorageFtpUser#timeouts}

---

##### `UserCredentials`<sup>Optional</sup> <a name="UserCredentials" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.userCredentials"></a>

```csharp
public IResolvable|GoogleStorageFtpUserUserCredentials[] UserCredentials { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentials">GoogleStorageFtpUserUserCredentials</a>[]

user_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#user_credentials GoogleStorageFtpUser#user_credentials}

---

### GoogleStorageFtpUserStorageDirectoryMappings <a name="GoogleStorageFtpUserStorageDirectoryMappings" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleStorageFtpUserStorageDirectoryMappings {
    string Bucket = null,
    string BucketPrefix = null,
    string Directory = null,
    string Permission = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings.property.bucket">Bucket</a></code> | <code>string</code> | The Cloud Storage bucket name. Omit the gs://. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings.property.bucketPrefix">BucketPrefix</a></code> | <code>string</code> | The path of a folder within the bucket to set as the root directory for this directory mapping. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings.property.directory">Directory</a></code> | <code>string</code> | The directory path in the virtual file system. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings.property.permission">Permission</a></code> | <code>string</code> | The access level for the directory. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

The Cloud Storage bucket name. Omit the gs://.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#bucket GoogleStorageFtpUser#bucket}

---

##### `BucketPrefix`<sup>Optional</sup> <a name="BucketPrefix" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings.property.bucketPrefix"></a>

```csharp
public string BucketPrefix { get; set; }
```

- *Type:* string

The path of a folder within the bucket to set as the root directory for this directory mapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#bucket_prefix GoogleStorageFtpUser#bucket_prefix}

---

##### `Directory`<sup>Optional</sup> <a name="Directory" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings.property.directory"></a>

```csharp
public string Directory { get; set; }
```

- *Type:* string

The directory path in the virtual file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#directory GoogleStorageFtpUser#directory}

---

##### `Permission`<sup>Optional</sup> <a name="Permission" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

The access level for the directory.

For read-only access, set this value to READ_ONLY. For read and write access, set this value to READ_WRITE. Possible values: ["READ_ONLY", "READ_WRITE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#permission GoogleStorageFtpUser#permission}

---

### GoogleStorageFtpUserTimeouts <a name="GoogleStorageFtpUserTimeouts" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleStorageFtpUserTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#create GoogleStorageFtpUser#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#delete GoogleStorageFtpUser#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#update GoogleStorageFtpUser#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#create GoogleStorageFtpUser#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#delete GoogleStorageFtpUser#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#update GoogleStorageFtpUser#update}.

---

### GoogleStorageFtpUserUserCredentials <a name="GoogleStorageFtpUserUserCredentials" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentials.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleStorageFtpUserUserCredentials {
    string CredentialName = null,
    string CredentialType = null,
    string SshPublicKeyBody = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentials.property.credentialName">CredentialName</a></code> | <code>string</code> | The name of the credential. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentials.property.credentialType">CredentialType</a></code> | <code>string</code> | The type of the credential. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentials.property.sshPublicKeyBody">SshPublicKeyBody</a></code> | <code>string</code> | The SSH public key body. |

---

##### `CredentialName`<sup>Optional</sup> <a name="CredentialName" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentials.property.credentialName"></a>

```csharp
public string CredentialName { get; set; }
```

- *Type:* string

The name of the credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#credential_name GoogleStorageFtpUser#credential_name}

---

##### `CredentialType`<sup>Optional</sup> <a name="CredentialType" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentials.property.credentialType"></a>

```csharp
public string CredentialType { get; set; }
```

- *Type:* string

The type of the credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#credential_type GoogleStorageFtpUser#credential_type}

---

##### `SshPublicKeyBody`<sup>Optional</sup> <a name="SshPublicKeyBody" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentials.property.sshPublicKeyBody"></a>

```csharp
public string SshPublicKeyBody { get; set; }
```

- *Type:* string

The SSH public key body.

A file either absolute or relative path should be provided which contains the ssh public key using file() interpolation in Terraform, not recommended to have key as a literal string in config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#ssh_public_key_body GoogleStorageFtpUser#ssh_public_key_body}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleStorageFtpUserStorageDirectoryMappingsList <a name="GoogleStorageFtpUserStorageDirectoryMappingsList" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleStorageFtpUserStorageDirectoryMappingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.get"></a>

```csharp
private GoogleStorageFtpUserStorageDirectoryMappingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings">GoogleStorageFtpUserStorageDirectoryMappings</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleStorageFtpUserStorageDirectoryMappings[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings">GoogleStorageFtpUserStorageDirectoryMappings</a>[]

---


### GoogleStorageFtpUserStorageDirectoryMappingsOutputReference <a name="GoogleStorageFtpUserStorageDirectoryMappingsOutputReference" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleStorageFtpUserStorageDirectoryMappingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.resetBucketPrefix">ResetBucketPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.resetDirectory">ResetDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.resetPermission">ResetPermission</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.resetBucket"></a>

```csharp
private void ResetBucket()
```

##### `ResetBucketPrefix` <a name="ResetBucketPrefix" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.resetBucketPrefix"></a>

```csharp
private void ResetBucketPrefix()
```

##### `ResetDirectory` <a name="ResetDirectory" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.resetDirectory"></a>

```csharp
private void ResetDirectory()
```

##### `ResetPermission` <a name="ResetPermission" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.resetPermission"></a>

```csharp
private void ResetPermission()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.bucketPrefixInput">BucketPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.directoryInput">DirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.bucketPrefix">BucketPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.directory">Directory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings">GoogleStorageFtpUserStorageDirectoryMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `BucketPrefixInput`<sup>Optional</sup> <a name="BucketPrefixInput" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.bucketPrefixInput"></a>

```csharp
public string BucketPrefixInput { get; }
```

- *Type:* string

---

##### `DirectoryInput`<sup>Optional</sup> <a name="DirectoryInput" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.directoryInput"></a>

```csharp
public string DirectoryInput { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `BucketPrefix`<sup>Required</sup> <a name="BucketPrefix" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.bucketPrefix"></a>

```csharp
public string BucketPrefix { get; }
```

- *Type:* string

---

##### `Directory`<sup>Required</sup> <a name="Directory" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.directory"></a>

```csharp
public string Directory { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleStorageFtpUserStorageDirectoryMappings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings">GoogleStorageFtpUserStorageDirectoryMappings</a>

---


### GoogleStorageFtpUserTimeoutsOutputReference <a name="GoogleStorageFtpUserTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleStorageFtpUserTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeouts">GoogleStorageFtpUserTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleStorageFtpUserTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeouts">GoogleStorageFtpUserTimeouts</a>

---


### GoogleStorageFtpUserUserCredentialsList <a name="GoogleStorageFtpUserUserCredentialsList" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleStorageFtpUserUserCredentialsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.get"></a>

```csharp
private GoogleStorageFtpUserUserCredentialsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentials">GoogleStorageFtpUserUserCredentials</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleStorageFtpUserUserCredentials[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentials">GoogleStorageFtpUserUserCredentials</a>[]

---


### GoogleStorageFtpUserUserCredentialsOutputReference <a name="GoogleStorageFtpUserUserCredentialsOutputReference" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleStorageFtpUserUserCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.resetCredentialName">ResetCredentialName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.resetCredentialType">ResetCredentialType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.resetSshPublicKeyBody">ResetSshPublicKeyBody</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCredentialName` <a name="ResetCredentialName" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.resetCredentialName"></a>

```csharp
private void ResetCredentialName()
```

##### `ResetCredentialType` <a name="ResetCredentialType" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.resetCredentialType"></a>

```csharp
private void ResetCredentialType()
```

##### `ResetSshPublicKeyBody` <a name="ResetSshPublicKeyBody" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.resetSshPublicKeyBody"></a>

```csharp
private void ResetSshPublicKeyBody()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.property.credentialNameInput">CredentialNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.property.credentialTypeInput">CredentialTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.property.sshPublicKeyBodyInput">SshPublicKeyBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.property.credentialName">CredentialName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.property.credentialType">CredentialType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.property.sshPublicKeyBody">SshPublicKeyBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentials">GoogleStorageFtpUserUserCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CredentialNameInput`<sup>Optional</sup> <a name="CredentialNameInput" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.property.credentialNameInput"></a>

```csharp
public string CredentialNameInput { get; }
```

- *Type:* string

---

##### `CredentialTypeInput`<sup>Optional</sup> <a name="CredentialTypeInput" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.property.credentialTypeInput"></a>

```csharp
public string CredentialTypeInput { get; }
```

- *Type:* string

---

##### `SshPublicKeyBodyInput`<sup>Optional</sup> <a name="SshPublicKeyBodyInput" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.property.sshPublicKeyBodyInput"></a>

```csharp
public string SshPublicKeyBodyInput { get; }
```

- *Type:* string

---

##### `CredentialName`<sup>Required</sup> <a name="CredentialName" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.property.credentialName"></a>

```csharp
public string CredentialName { get; }
```

- *Type:* string

---

##### `CredentialType`<sup>Required</sup> <a name="CredentialType" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.property.credentialType"></a>

```csharp
public string CredentialType { get; }
```

- *Type:* string

---

##### `SshPublicKeyBody`<sup>Required</sup> <a name="SshPublicKeyBody" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.property.sshPublicKeyBody"></a>

```csharp
public string SshPublicKeyBody { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleStorageFtpUserUserCredentials InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentials">GoogleStorageFtpUserUserCredentials</a>

---



