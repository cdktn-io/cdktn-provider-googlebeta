# `googleBigqueryDataTransferDataSourceEnrollment` Submodule <a name="`googleBigqueryDataTransferDataSourceEnrollment` Submodule" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigqueryDataTransferDataSourceEnrollment <a name="GoogleBigqueryDataTransferDataSourceEnrollment" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment google_bigquery_data_transfer_data_source_enrollment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBigqueryDataTransferDataSourceEnrollment(Construct Scope, string Id, GoogleBigqueryDataTransferDataSourceEnrollmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig">GoogleBigqueryDataTransferDataSourceEnrollmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig">GoogleBigqueryDataTransferDataSourceEnrollmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.resetUnenrollLocation">ResetUnenrollLocation</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts">GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUnenrollLocation` <a name="ResetUnenrollLocation" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.resetUnenrollLocation"></a>

```csharp
private void ResetUnenrollLocation()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleBigqueryDataTransferDataSourceEnrollment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleBigqueryDataTransferDataSourceEnrollment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleBigqueryDataTransferDataSourceEnrollment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleBigqueryDataTransferDataSourceEnrollment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleBigqueryDataTransferDataSourceEnrollment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleBigqueryDataTransferDataSourceEnrollment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleBigqueryDataTransferDataSourceEnrollment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleBigqueryDataTransferDataSourceEnrollment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleBigqueryDataTransferDataSourceEnrollment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.authorizationType">AuthorizationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.dataRefreshType">DataRefreshType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.defaultDataRefreshWindowDays">DefaultDataRefreshWindowDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.defaultSchedule">DefaultSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.helpUrl">HelpUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.manualRunsDisabled">ManualRunsDisabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.minimumScheduleInterval">MinimumScheduleInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList">GoogleBigqueryDataTransferDataSourceEnrollmentParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.supportsCustomSchedule">SupportsCustomSchedule</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference">GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.updateDeadlineSeconds">UpdateDeadlineSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.dataSourceIdInput">DataSourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts">GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.unenrollLocationInput">UnenrollLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.dataSourceId">DataSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.unenrollLocation">UnenrollLocation</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AuthorizationType`<sup>Required</sup> <a name="AuthorizationType" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.authorizationType"></a>

```csharp
public string AuthorizationType { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `DataRefreshType`<sup>Required</sup> <a name="DataRefreshType" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.dataRefreshType"></a>

```csharp
public string DataRefreshType { get; }
```

- *Type:* string

---

##### `DefaultDataRefreshWindowDays`<sup>Required</sup> <a name="DefaultDataRefreshWindowDays" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.defaultDataRefreshWindowDays"></a>

```csharp
public double DefaultDataRefreshWindowDays { get; }
```

- *Type:* double

---

##### `DefaultSchedule`<sup>Required</sup> <a name="DefaultSchedule" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.defaultSchedule"></a>

```csharp
public string DefaultSchedule { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `HelpUrl`<sup>Required</sup> <a name="HelpUrl" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.helpUrl"></a>

```csharp
public string HelpUrl { get; }
```

- *Type:* string

---

##### `ManualRunsDisabled`<sup>Required</sup> <a name="ManualRunsDisabled" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.manualRunsDisabled"></a>

```csharp
public IResolvable ManualRunsDisabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `MinimumScheduleInterval`<sup>Required</sup> <a name="MinimumScheduleInterval" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.minimumScheduleInterval"></a>

```csharp
public string MinimumScheduleInterval { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.parameters"></a>

```csharp
public GoogleBigqueryDataTransferDataSourceEnrollmentParametersList Parameters { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList">GoogleBigqueryDataTransferDataSourceEnrollmentParametersList</a>

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `SupportsCustomSchedule`<sup>Required</sup> <a name="SupportsCustomSchedule" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.supportsCustomSchedule"></a>

```csharp
public IResolvable SupportsCustomSchedule { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.timeouts"></a>

```csharp
public GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference">GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference</a>

---

##### `UpdateDeadlineSeconds`<sup>Required</sup> <a name="UpdateDeadlineSeconds" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.updateDeadlineSeconds"></a>

```csharp
public double UpdateDeadlineSeconds { get; }
```

- *Type:* double

---

##### `DataSourceIdInput`<sup>Optional</sup> <a name="DataSourceIdInput" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.dataSourceIdInput"></a>

```csharp
public string DataSourceIdInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts">GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts</a>

---

##### `UnenrollLocationInput`<sup>Optional</sup> <a name="UnenrollLocationInput" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.unenrollLocationInput"></a>

```csharp
public string UnenrollLocationInput { get; }
```

- *Type:* string

---

##### `DataSourceId`<sup>Required</sup> <a name="DataSourceId" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.dataSourceId"></a>

```csharp
public string DataSourceId { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `UnenrollLocation`<sup>Required</sup> <a name="UnenrollLocation" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.unenrollLocation"></a>

```csharp
public string UnenrollLocation { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigqueryDataTransferDataSourceEnrollmentConfig <a name="GoogleBigqueryDataTransferDataSourceEnrollmentConfig" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBigqueryDataTransferDataSourceEnrollmentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DataSourceId,
    string DeletionPolicy = null,
    string Id = null,
    string Project = null,
    GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts Timeouts = null,
    string UnenrollLocation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.dataSourceId">DataSourceId</a></code> | <code>string</code> | The ID of the data source to enroll. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#id GoogleBigqueryDataTransferDataSourceEnrollment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#project GoogleBigqueryDataTransferDataSourceEnrollment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts">GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.unenrollLocation">UnenrollLocation</a></code> | <code>string</code> | The location whose 'unenrollDataSources' endpoint is called when this resource is destroyed. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DataSourceId`<sup>Required</sup> <a name="DataSourceId" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.dataSourceId"></a>

```csharp
public string DataSourceId { get; set; }
```

- *Type:* string

The ID of the data source to enroll.

For Google Cloud Carbon Footprint exports this is
'61cede5a-0000-2440-ad42-883d24f8f7b8'. Call 'projects.dataSources.list' to see the data
sources currently enrolled in a project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#data_source_id GoogleBigqueryDataTransferDataSourceEnrollment#data_source_id}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#deletion_policy GoogleBigqueryDataTransferDataSourceEnrollment#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#id GoogleBigqueryDataTransferDataSourceEnrollment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#project GoogleBigqueryDataTransferDataSourceEnrollment#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.timeouts"></a>

```csharp
public GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts">GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#timeouts GoogleBigqueryDataTransferDataSourceEnrollment#timeouts}

---

##### `UnenrollLocation`<sup>Optional</sup> <a name="UnenrollLocation" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.unenrollLocation"></a>

```csharp
public string UnenrollLocation { get; set; }
```

- *Type:* string

The location whose 'unenrollDataSources' endpoint is called when this resource is destroyed.

Enrollment itself is project-wide and unenrolling through any location removes it everywhere;
this only exists because the API offers no project-level unenroll method. Override it only if
'us' is not routable for the project, for example under a data-residency organization policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#unenroll_location GoogleBigqueryDataTransferDataSourceEnrollment#unenroll_location}

---

### GoogleBigqueryDataTransferDataSourceEnrollmentParameters <a name="GoogleBigqueryDataTransferDataSourceEnrollmentParameters" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBigqueryDataTransferDataSourceEnrollmentParameters {

};
```


### GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts <a name="GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#create GoogleBigqueryDataTransferDataSourceEnrollment#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#delete GoogleBigqueryDataTransferDataSourceEnrollment#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#create GoogleBigqueryDataTransferDataSourceEnrollment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#delete GoogleBigqueryDataTransferDataSourceEnrollment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigqueryDataTransferDataSourceEnrollmentParametersList <a name="GoogleBigqueryDataTransferDataSourceEnrollmentParametersList" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBigqueryDataTransferDataSourceEnrollmentParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.get"></a>

```csharp
private GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference <a name="GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.allowedValues">AllowedValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.deprecated">Deprecated</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.immutable">Immutable</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.maxListSize">MaxListSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.maxValue">MaxValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.minValue">MinValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.paramId">ParamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.required">Required</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.validationDescription">ValidationDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.validationHelpUrl">ValidationHelpUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.validationRegex">ValidationRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParameters">GoogleBigqueryDataTransferDataSourceEnrollmentParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedValues`<sup>Required</sup> <a name="AllowedValues" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.allowedValues"></a>

```csharp
public string[] AllowedValues { get; }
```

- *Type:* string[]

---

##### `Deprecated`<sup>Required</sup> <a name="Deprecated" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.deprecated"></a>

```csharp
public IResolvable Deprecated { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Immutable`<sup>Required</sup> <a name="Immutable" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.immutable"></a>

```csharp
public IResolvable Immutable { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `MaxListSize`<sup>Required</sup> <a name="MaxListSize" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.maxListSize"></a>

```csharp
public double MaxListSize { get; }
```

- *Type:* double

---

##### `MaxValue`<sup>Required</sup> <a name="MaxValue" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.maxValue"></a>

```csharp
public double MaxValue { get; }
```

- *Type:* double

---

##### `MinValue`<sup>Required</sup> <a name="MinValue" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.minValue"></a>

```csharp
public double MinValue { get; }
```

- *Type:* double

---

##### `ParamId`<sup>Required</sup> <a name="ParamId" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.paramId"></a>

```csharp
public string ParamId { get; }
```

- *Type:* string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.required"></a>

```csharp
public IResolvable Required { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `ValidationDescription`<sup>Required</sup> <a name="ValidationDescription" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.validationDescription"></a>

```csharp
public string ValidationDescription { get; }
```

- *Type:* string

---

##### `ValidationHelpUrl`<sup>Required</sup> <a name="ValidationHelpUrl" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.validationHelpUrl"></a>

```csharp
public string ValidationHelpUrl { get; }
```

- *Type:* string

---

##### `ValidationRegex`<sup>Required</sup> <a name="ValidationRegex" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.validationRegex"></a>

```csharp
public string ValidationRegex { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryDataTransferDataSourceEnrollmentParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParameters">GoogleBigqueryDataTransferDataSourceEnrollmentParameters</a>

---


### GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference <a name="GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts">GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts">GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts</a>

---



