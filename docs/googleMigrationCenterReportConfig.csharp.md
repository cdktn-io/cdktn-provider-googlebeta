# `googleMigrationCenterReportConfig` Submodule <a name="`googleMigrationCenterReportConfig` Submodule" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleMigrationCenterReportConfig <a name="GoogleMigrationCenterReportConfig" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_report_config google_migration_center_report_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterReportConfig(Construct Scope, string Id, GoogleMigrationCenterReportConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig">GoogleMigrationCenterReportConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig">GoogleMigrationCenterReportConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.putGroupPreferencesetAssignments">PutGroupPreferencesetAssignments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutGroupPreferencesetAssignments` <a name="PutGroupPreferencesetAssignments" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.putGroupPreferencesetAssignments"></a>

```csharp
private void PutGroupPreferencesetAssignments(IResolvable|GoogleMigrationCenterReportConfigGroupPreferencesetAssignments[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.putGroupPreferencesetAssignments.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignments">GoogleMigrationCenterReportConfigGroupPreferencesetAssignments</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleMigrationCenterReportConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeouts">GoogleMigrationCenterReportConfigTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleMigrationCenterReportConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleMigrationCenterReportConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleMigrationCenterReportConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleMigrationCenterReportConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleMigrationCenterReportConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleMigrationCenterReportConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleMigrationCenterReportConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleMigrationCenterReportConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_report_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleMigrationCenterReportConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.groupPreferencesetAssignments">GroupPreferencesetAssignments</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList">GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference">GoogleMigrationCenterReportConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.groupPreferencesetAssignmentsInput">GroupPreferencesetAssignmentsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignments">GoogleMigrationCenterReportConfigGroupPreferencesetAssignments</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.reportConfigIdInput">ReportConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeouts">GoogleMigrationCenterReportConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.reportConfigId">ReportConfigId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `GroupPreferencesetAssignments`<sup>Required</sup> <a name="GroupPreferencesetAssignments" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.groupPreferencesetAssignments"></a>

```csharp
public GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList GroupPreferencesetAssignments { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList">GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.timeouts"></a>

```csharp
public GoogleMigrationCenterReportConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference">GoogleMigrationCenterReportConfigTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `GroupPreferencesetAssignmentsInput`<sup>Optional</sup> <a name="GroupPreferencesetAssignmentsInput" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.groupPreferencesetAssignmentsInput"></a>

```csharp
public IResolvable|GoogleMigrationCenterReportConfigGroupPreferencesetAssignments[] GroupPreferencesetAssignmentsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignments">GoogleMigrationCenterReportConfigGroupPreferencesetAssignments</a>[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ReportConfigIdInput`<sup>Optional</sup> <a name="ReportConfigIdInput" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.reportConfigIdInput"></a>

```csharp
public string ReportConfigIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleMigrationCenterReportConfigTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeouts">GoogleMigrationCenterReportConfigTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ReportConfigId`<sup>Required</sup> <a name="ReportConfigId" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.reportConfigId"></a>

```csharp
public string ReportConfigId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleMigrationCenterReportConfigConfig <a name="GoogleMigrationCenterReportConfigConfig" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterReportConfigConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|GoogleMigrationCenterReportConfigGroupPreferencesetAssignments[] GroupPreferencesetAssignments,
    string Location,
    string ReportConfigId,
    string DeletionPolicy = null,
    string Description = null,
    string DisplayName = null,
    string Id = null,
    string Project = null,
    GoogleMigrationCenterReportConfigTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.groupPreferencesetAssignments">GroupPreferencesetAssignments</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignments">GoogleMigrationCenterReportConfigGroupPreferencesetAssignments</a>[]</code> | group_preferenceset_assignments block. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.reportConfigId">ReportConfigId</a></code> | <code>string</code> | User specified ID for the report config. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.description">Description</a></code> | <code>string</code> | Free-text description. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.displayName">DisplayName</a></code> | <code>string</code> | User-friendly display name. Maximum length is 63 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_report_config#id GoogleMigrationCenterReportConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_report_config#project GoogleMigrationCenterReportConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeouts">GoogleMigrationCenterReportConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `GroupPreferencesetAssignments`<sup>Required</sup> <a name="GroupPreferencesetAssignments" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.groupPreferencesetAssignments"></a>

```csharp
public IResolvable|GoogleMigrationCenterReportConfigGroupPreferencesetAssignments[] GroupPreferencesetAssignments { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignments">GoogleMigrationCenterReportConfigGroupPreferencesetAssignments</a>[]

group_preferenceset_assignments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_report_config#group_preferenceset_assignments GoogleMigrationCenterReportConfig#group_preferenceset_assignments}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_report_config#location GoogleMigrationCenterReportConfig#location}

---

##### `ReportConfigId`<sup>Required</sup> <a name="ReportConfigId" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.reportConfigId"></a>

```csharp
public string ReportConfigId { get; set; }
```

- *Type:* string

User specified ID for the report config.

It will become the last component
of the report config name. The ID must be unique within the project, must
conform with RFC-1034, is restricted to lower-cased letters, and has a
maximum length of 63 characters. The ID must match the regular expression:
[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_report_config#report_config_id GoogleMigrationCenterReportConfig#report_config_id}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_report_config#deletion_policy GoogleMigrationCenterReportConfig#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Free-text description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_report_config#description GoogleMigrationCenterReportConfig#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

User-friendly display name. Maximum length is 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_report_config#display_name GoogleMigrationCenterReportConfig#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_report_config#id GoogleMigrationCenterReportConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_report_config#project GoogleMigrationCenterReportConfig#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.timeouts"></a>

```csharp
public GoogleMigrationCenterReportConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeouts">GoogleMigrationCenterReportConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_report_config#timeouts GoogleMigrationCenterReportConfig#timeouts}

---

### GoogleMigrationCenterReportConfigGroupPreferencesetAssignments <a name="GoogleMigrationCenterReportConfigGroupPreferencesetAssignments" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignments.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterReportConfigGroupPreferencesetAssignments {
    string Group,
    string PreferenceSet
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignments.property.group">Group</a></code> | <code>string</code> | Name of the group. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignments.property.preferenceSet">PreferenceSet</a></code> | <code>string</code> | Name of the Preference Set. |

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignments.property.group"></a>

```csharp
public string Group { get; set; }
```

- *Type:* string

Name of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_report_config#group GoogleMigrationCenterReportConfig#group}

---

##### `PreferenceSet`<sup>Required</sup> <a name="PreferenceSet" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignments.property.preferenceSet"></a>

```csharp
public string PreferenceSet { get; set; }
```

- *Type:* string

Name of the Preference Set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_report_config#preference_set GoogleMigrationCenterReportConfig#preference_set}

---

### GoogleMigrationCenterReportConfigTimeouts <a name="GoogleMigrationCenterReportConfigTimeouts" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterReportConfigTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_report_config#create GoogleMigrationCenterReportConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_report_config#delete GoogleMigrationCenterReportConfig#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_report_config#create GoogleMigrationCenterReportConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_report_config#delete GoogleMigrationCenterReportConfig#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList <a name="GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList.get"></a>

```csharp
private GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignments">GoogleMigrationCenterReportConfigGroupPreferencesetAssignments</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleMigrationCenterReportConfigGroupPreferencesetAssignments[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignments">GoogleMigrationCenterReportConfigGroupPreferencesetAssignments</a>[]

---


### GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference <a name="GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.groupInput">GroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.preferenceSetInput">PreferenceSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.group">Group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.preferenceSet">PreferenceSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignments">GoogleMigrationCenterReportConfigGroupPreferencesetAssignments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.groupInput"></a>

```csharp
public string GroupInput { get; }
```

- *Type:* string

---

##### `PreferenceSetInput`<sup>Optional</sup> <a name="PreferenceSetInput" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.preferenceSetInput"></a>

```csharp
public string PreferenceSetInput { get; }
```

- *Type:* string

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.group"></a>

```csharp
public string Group { get; }
```

- *Type:* string

---

##### `PreferenceSet`<sup>Required</sup> <a name="PreferenceSet" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.preferenceSet"></a>

```csharp
public string PreferenceSet { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleMigrationCenterReportConfigGroupPreferencesetAssignments InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignments">GoogleMigrationCenterReportConfigGroupPreferencesetAssignments</a>

---


### GoogleMigrationCenterReportConfigTimeoutsOutputReference <a name="GoogleMigrationCenterReportConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterReportConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeouts">GoogleMigrationCenterReportConfigTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleMigrationCenterReportConfigTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeouts">GoogleMigrationCenterReportConfigTimeouts</a>

---



