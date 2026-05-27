# `googleNetappBackup` Submodule <a name="`googleNetappBackup` Submodule" id="@cdktn/provider-google-beta.googleNetappBackup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetappBackup <a name="GoogleNetappBackup" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_netapp_backup google_netapp_backup}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetappBackup(Construct Scope, string Id, GoogleNetappBackupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupConfig">GoogleNetappBackupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupConfig">GoogleNetappBackupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.putOntapSource">PutOntapSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.resetOntapSource">ResetOntapSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.resetSourceSnapshot">ResetSourceSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.resetSourceVolume">ResetSourceVolume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOntapSource` <a name="PutOntapSource" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.putOntapSource"></a>

```csharp
private void PutOntapSource(GoogleNetappBackupOntapSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.putOntapSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSource">GoogleNetappBackupOntapSource</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleNetappBackupTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeouts">GoogleNetappBackupTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetOntapSource` <a name="ResetOntapSource" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.resetOntapSource"></a>

```csharp
private void ResetOntapSource()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetSourceSnapshot` <a name="ResetSourceSnapshot" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.resetSourceSnapshot"></a>

```csharp
private void ResetSourceSnapshot()
```

##### `ResetSourceVolume` <a name="ResetSourceVolume" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.resetSourceVolume"></a>

```csharp
private void ResetSourceVolume()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetappBackup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetappBackup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetappBackup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetappBackup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetappBackup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleNetappBackup resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetappBackup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetappBackup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_netapp_backup#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetappBackup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.backupRegion">BackupRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.backupType">BackupType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.chainStorageBytes">ChainStorageBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.ontapSource">OntapSource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference">GoogleNetappBackupOntapSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference">GoogleNetappBackupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.volumeRegion">VolumeRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.volumeUsageBytes">VolumeUsageBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.ontapSourceInput">OntapSourceInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSource">GoogleNetappBackupOntapSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.sourceSnapshotInput">SourceSnapshotInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.sourceVolumeInput">SourceVolumeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeouts">GoogleNetappBackupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.vaultNameInput">VaultNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.sourceSnapshot">SourceSnapshot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.sourceVolume">SourceVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.vaultName">VaultName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BackupRegion`<sup>Required</sup> <a name="BackupRegion" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.backupRegion"></a>

```csharp
public string BackupRegion { get; }
```

- *Type:* string

---

##### `BackupType`<sup>Required</sup> <a name="BackupType" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.backupType"></a>

```csharp
public string BackupType { get; }
```

- *Type:* string

---

##### `ChainStorageBytes`<sup>Required</sup> <a name="ChainStorageBytes" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.chainStorageBytes"></a>

```csharp
public string ChainStorageBytes { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `OntapSource`<sup>Required</sup> <a name="OntapSource" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.ontapSource"></a>

```csharp
public GoogleNetappBackupOntapSourceOutputReference OntapSource { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference">GoogleNetappBackupOntapSourceOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.timeouts"></a>

```csharp
public GoogleNetappBackupTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference">GoogleNetappBackupTimeoutsOutputReference</a>

---

##### `VolumeRegion`<sup>Required</sup> <a name="VolumeRegion" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.volumeRegion"></a>

```csharp
public string VolumeRegion { get; }
```

- *Type:* string

---

##### `VolumeUsageBytes`<sup>Required</sup> <a name="VolumeUsageBytes" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.volumeUsageBytes"></a>

```csharp
public string VolumeUsageBytes { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OntapSourceInput`<sup>Optional</sup> <a name="OntapSourceInput" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.ontapSourceInput"></a>

```csharp
public GoogleNetappBackupOntapSource OntapSourceInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSource">GoogleNetappBackupOntapSource</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SourceSnapshotInput`<sup>Optional</sup> <a name="SourceSnapshotInput" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.sourceSnapshotInput"></a>

```csharp
public string SourceSnapshotInput { get; }
```

- *Type:* string

---

##### `SourceVolumeInput`<sup>Optional</sup> <a name="SourceVolumeInput" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.sourceVolumeInput"></a>

```csharp
public string SourceVolumeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleNetappBackupTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeouts">GoogleNetappBackupTimeouts</a>

---

##### `VaultNameInput`<sup>Optional</sup> <a name="VaultNameInput" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.vaultNameInput"></a>

```csharp
public string VaultNameInput { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `SourceSnapshot`<sup>Required</sup> <a name="SourceSnapshot" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.sourceSnapshot"></a>

```csharp
public string SourceSnapshot { get; }
```

- *Type:* string

---

##### `SourceVolume`<sup>Required</sup> <a name="SourceVolume" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.sourceVolume"></a>

```csharp
public string SourceVolume { get; }
```

- *Type:* string

---

##### `VaultName`<sup>Required</sup> <a name="VaultName" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.vaultName"></a>

```csharp
public string VaultName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetappBackupConfig <a name="GoogleNetappBackupConfig" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetappBackupConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string Name,
    string VaultName,
    string DeletionPolicy = null,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    GoogleNetappBackupOntapSource OntapSource = null,
    string Project = null,
    string SourceSnapshot = null,
    string SourceVolume = null,
    GoogleNetappBackupTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupConfig.property.location">Location</a></code> | <code>string</code> | Location of the backup. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupConfig.property.name">Name</a></code> | <code>string</code> | The resource name of the backup. Needs to be unique per location. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupConfig.property.vaultName">VaultName</a></code> | <code>string</code> | Name of the backup vault to store the backup in. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupConfig.property.description">Description</a></code> | <code>string</code> | A description of the backup with 2048 characters or less. Requests with longer descriptions will be rejected. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_netapp_backup#id GoogleNetappBackup#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupConfig.property.ontapSource">OntapSource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSource">GoogleNetappBackupOntapSource</a></code> | ontap_source block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_netapp_backup#project GoogleNetappBackup#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupConfig.property.sourceSnapshot">SourceSnapshot</a></code> | <code>string</code> | If specified, backup will be created from the given snapshot. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupConfig.property.sourceVolume">SourceVolume</a></code> | <code>string</code> | ID of volumes this backup belongs to. Format: 'projects/{{projects_id}}/locations/{{location}}/volumes/{{name}}''. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeouts">GoogleNetappBackupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Location of the backup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_netapp_backup#location GoogleNetappBackup#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The resource name of the backup. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_netapp_backup#name GoogleNetappBackup#name}

---

##### `VaultName`<sup>Required</sup> <a name="VaultName" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupConfig.property.vaultName"></a>

```csharp
public string VaultName { get; set; }
```

- *Type:* string

Name of the backup vault to store the backup in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_netapp_backup#vault_name GoogleNetappBackup#vault_name}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_netapp_backup#deletion_policy GoogleNetappBackup#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the backup with 2048 characters or less. Requests with longer descriptions will be rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_netapp_backup#description GoogleNetappBackup#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_netapp_backup#id GoogleNetappBackup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_netapp_backup#labels GoogleNetappBackup#labels}

---

##### `OntapSource`<sup>Optional</sup> <a name="OntapSource" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupConfig.property.ontapSource"></a>

```csharp
public GoogleNetappBackupOntapSource OntapSource { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSource">GoogleNetappBackupOntapSource</a>

ontap_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_netapp_backup#ontap_source GoogleNetappBackup#ontap_source}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_netapp_backup#project GoogleNetappBackup#project}.

---

##### `SourceSnapshot`<sup>Optional</sup> <a name="SourceSnapshot" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupConfig.property.sourceSnapshot"></a>

```csharp
public string SourceSnapshot { get; set; }
```

- *Type:* string

If specified, backup will be created from the given snapshot.

If not specified,
there will be a new snapshot taken to initiate the backup creation.
Format: 'projects/{{projectId}}/locations/{{location}}/volumes/{{volumename}}/snapshots/{{snapshotname}}''

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_netapp_backup#source_snapshot GoogleNetappBackup#source_snapshot}

---

##### `SourceVolume`<sup>Optional</sup> <a name="SourceVolume" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupConfig.property.sourceVolume"></a>

```csharp
public string SourceVolume { get; set; }
```

- *Type:* string

ID of volumes this backup belongs to. Format: 'projects/{{projects_id}}/locations/{{location}}/volumes/{{name}}''.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_netapp_backup#source_volume GoogleNetappBackup#source_volume}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupConfig.property.timeouts"></a>

```csharp
public GoogleNetappBackupTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeouts">GoogleNetappBackupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_netapp_backup#timeouts GoogleNetappBackup#timeouts}

---

### GoogleNetappBackupOntapSource <a name="GoogleNetappBackupOntapSource" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetappBackupOntapSource {
    string StoragePool,
    string VolumeUuid,
    string SnapshotUuid = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSource.property.storagePool">StoragePool</a></code> | <code>string</code> | Name of the storage pool. This must be specified for creating backups for ONTAP mode volumes. Format: 'projects/{{project}}/locations/{{location}}/storagePools/{{storage_pool_id}}'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSource.property.volumeUuid">VolumeUuid</a></code> | <code>string</code> | The UUID of the ONTAP source volume. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSource.property.snapshotUuid">SnapshotUuid</a></code> | <code>string</code> | The UUID of the ONTAP source snapshot. |

---

##### `StoragePool`<sup>Required</sup> <a name="StoragePool" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSource.property.storagePool"></a>

```csharp
public string StoragePool { get; set; }
```

- *Type:* string

Name of the storage pool. This must be specified for creating backups for ONTAP mode volumes. Format: 'projects/{{project}}/locations/{{location}}/storagePools/{{storage_pool_id}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_netapp_backup#storage_pool GoogleNetappBackup#storage_pool}

---

##### `VolumeUuid`<sup>Required</sup> <a name="VolumeUuid" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSource.property.volumeUuid"></a>

```csharp
public string VolumeUuid { get; set; }
```

- *Type:* string

The UUID of the ONTAP source volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_netapp_backup#volume_uuid GoogleNetappBackup#volume_uuid}

---

##### `SnapshotUuid`<sup>Optional</sup> <a name="SnapshotUuid" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSource.property.snapshotUuid"></a>

```csharp
public string SnapshotUuid { get; set; }
```

- *Type:* string

The UUID of the ONTAP source snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_netapp_backup#snapshot_uuid GoogleNetappBackup#snapshot_uuid}

---

### GoogleNetappBackupTimeouts <a name="GoogleNetappBackupTimeouts" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetappBackupTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_netapp_backup#create GoogleNetappBackup#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_netapp_backup#delete GoogleNetappBackup#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_netapp_backup#update GoogleNetappBackup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_netapp_backup#create GoogleNetappBackup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_netapp_backup#delete GoogleNetappBackup#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_netapp_backup#update GoogleNetappBackup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetappBackupOntapSourceOutputReference <a name="GoogleNetappBackupOntapSourceOutputReference" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetappBackupOntapSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.resetSnapshotUuid">ResetSnapshotUuid</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSnapshotUuid` <a name="ResetSnapshotUuid" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.resetSnapshotUuid"></a>

```csharp
private void ResetSnapshotUuid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.property.snapshotUuidInput">SnapshotUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.property.storagePoolInput">StoragePoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.property.volumeUuidInput">VolumeUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.property.snapshotUuid">SnapshotUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.property.storagePool">StoragePool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.property.volumeUuid">VolumeUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSource">GoogleNetappBackupOntapSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SnapshotUuidInput`<sup>Optional</sup> <a name="SnapshotUuidInput" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.property.snapshotUuidInput"></a>

```csharp
public string SnapshotUuidInput { get; }
```

- *Type:* string

---

##### `StoragePoolInput`<sup>Optional</sup> <a name="StoragePoolInput" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.property.storagePoolInput"></a>

```csharp
public string StoragePoolInput { get; }
```

- *Type:* string

---

##### `VolumeUuidInput`<sup>Optional</sup> <a name="VolumeUuidInput" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.property.volumeUuidInput"></a>

```csharp
public string VolumeUuidInput { get; }
```

- *Type:* string

---

##### `SnapshotUuid`<sup>Required</sup> <a name="SnapshotUuid" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.property.snapshotUuid"></a>

```csharp
public string SnapshotUuid { get; }
```

- *Type:* string

---

##### `StoragePool`<sup>Required</sup> <a name="StoragePool" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.property.storagePool"></a>

```csharp
public string StoragePool { get; }
```

- *Type:* string

---

##### `VolumeUuid`<sup>Required</sup> <a name="VolumeUuid" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.property.volumeUuid"></a>

```csharp
public string VolumeUuid { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSourceOutputReference.property.internalValue"></a>

```csharp
public GoogleNetappBackupOntapSource InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupOntapSource">GoogleNetappBackupOntapSource</a>

---


### GoogleNetappBackupTimeoutsOutputReference <a name="GoogleNetappBackupTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetappBackupTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeouts">GoogleNetappBackupTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleNetappBackupTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetappBackup.GoogleNetappBackupTimeouts">GoogleNetappBackupTimeouts</a>

---



